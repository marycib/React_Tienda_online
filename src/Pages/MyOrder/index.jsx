import { useContext } from 'react'
import { Link} from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currenPath = window.location.pathname
  let index = currenPath.substring(currenPath.lastIndexOf('/') + 1)
   if (index === 'last') index = context.order?.length - 1
  
 // console.log('ORDER:', context.order?.slice(-1)[0])
  return (
    <Layout>
     <div className='flex items-center justify-center relative w-80 mb-6 mt-32'>
        <Link to='/my-orders' className='absolute left-0'>
           <ChevronLeftIcon
        className='h-12 w-12 text-black cursor-pointer rounded-lg border border-violet-500 p-4 mb-4 focus:outline-none
          shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-solid'/> </Link>
       
        <h1 className='font-medium text-xl rounded-lg border border-violet-500 p-4 mb-4 focus:outline-none
          shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-solid'>My Order</h1>
      </div>
    
      <div className=' flex-col w-80  rounded-lg border border-violet-500 p-4 mb-4 focus:outline-none
          shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-solid'>
  {
         context.order?.[index]?.products.map( product => (//renderiza los elementos de order
        < OrderCard
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.image}
        price={`$` + product.price}
        />
      ))
   } 
    </div>

    </Layout>
  )
}

export default MyOrder