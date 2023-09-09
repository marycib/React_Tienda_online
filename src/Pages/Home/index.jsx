import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)
  
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
          return (
            context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
       )} else {
        
        return (
        <> <div className=' flex h-full text-slate-950 col-span-3 justify-center m-11'>There are no matches</div>
        <div className='flex relative mb-20 col-span-3 border-double border-4 border-indigo-600 w-full h-40'>
            <div className='flex w-full absolute justify-center item-center'>
                <span className="  animate-ping  h-32 w-32 
                  -left-4 rounded-full bg-blue-200 opacity-70 ">
                </span>  
                <span className="animate-ping  h-32 w-32 
                  -left-4 rounded-full bg-red-200 opacity-70 ">
                </span>  
                <span className="  animate-ping  h-32 w-32 
                  -left-4 rounded-full bg-blue-200 opacity-70 ">
                </span>  
                <span className="animate-ping  h-32 w-32 
                  -left-4 rounded-full bg-red-200 opacity-70 ">
                </span>  
                <span className="  animate-ping  h-32 w-32 
                  -left-4 rounded-full bg-blue-200 opacity-70 ">
                </span>  
                <span className="animate-ping  h-32 w-32 
                  -left-4 rounded-full bg-red-200 opacity-70 ">
                </span>  
            </div>
              
        </div>
          
              </>
        )
        
       }
       
    } 
    
  

  return (
    <Layout>
    <div className='flex items-center justify-center relative w-80 mb-4'> 
       <h1 className='font-medium text-xl'>Exclusive Products</h1>
     </div>
     <input
      type="text"
      placeholder='Search a product'
      className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
      onChange={(event) => context.setSearchByTitle(event.target.value)}  />
      <div className='grid gap-2 grid-cols-3 w-full max-w-screen-lg justify-center'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home