import { useContext } from 'react'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
   // console.log('CART: ', context.cartProducts)
  }


  const renderIcon = (id) => {
  const isInCart = context.cartProducts.filter(product => product.id ===id).length > 0
  if (isInCart) {
    return (
      <div
      className='absolute top-0 right-0 flex justify-center
       items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
      <CheckIcon  className='h-8 w-8 text-white'></CheckIcon>
    </div>
    )
  } else {
     return (
      <div
      className='absolute top-0 right-0 flex justify-center
       items-center bg-white w-6 h-6 rounded-full m-2 p-1'
      onClick={(event) => addProductsToCart(event, data.data) }>
      <PlusIcon  className='h-6 w-6 text-violet-700'></PlusIcon>
    </div>
    )
  }
  }


   

  return (
    <div
      className='bg-white cursor-pointer w-56  
      rounded-lg m-5 shadow-[10px_10px_0px_0px_rgba(109,40,217)] border-solid border-4 flex flex-col justify-center items-center'
      onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 mt-4 w-4/5 h-36'>
        <span className='absolute bottom-1 left-0
         bg-white/60 rounded-lg text-black text-xs m-2
          px-3 py-0.5'>{data.data.category.name}
          </span>
        <img className='w-4/5 h-4/5 rounded-lg' src={data.data.image} alt={data.data.title} />
        <span >{renderIcon(data.data.id)}</span>
       
      </figure>
      <p className='flex justify-between flex-col items-center m-3'>
        <span className='text-sm font-light line-clamp-2'>{data.data.title}</span>
        <span className=' bottom-1 text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card