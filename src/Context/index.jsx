import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping Cart · Increment quantity
 const [count, setCount] = useState(0)


  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  

  
  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})
  //Shopping cart: Add product to cart
  const [cartProducts, setCartProducts] = useState([])

  //Shopping Cart . Order
  const [order, setOrder] = useState([])

//Get product
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
 


  //Get product by title
  const [searchByTitle, setSearchByTitle] = useState(null)
 // console.log('searchByTitle:', searchByTitle)

//Get product by category
 const [searchByCategory, setSearchByCategory] = useState(null)
 //console.log('searchByCategory: ', searchByCategory)
 //console.log('filteredItems:', filteredItems)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(items => items.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(items => items.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

const filterBy = (searchType, items, searchByTitle) => {
  if (searchType === 'BY_TITLE') {
    return filteredItemsByCategory(items, searchByTitle)
  }

  if (searchType === 'BY_CATEGORY') {
    return filteredItemsByCategory(items, searchByCategory)
  }

  if (searchType === 'BY_TITLE AND_CATEGORY') {
    return filteredItemsByCategory(items, searchByCategory).filter(items =>
       items.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  if (!searchType) {
    return items
  }
}


   useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy( 'BY_TITLE AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy( 'BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy( 'BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy( null, items, searchByTitle, searchByCategory))

  }, [items, searchByTitle, searchByCategory])
   //  console.log('filteredItems:',filteredItems)
    //console.log('searchByTitle:',searchByTitle)


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

