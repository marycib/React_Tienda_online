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
     <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
           <ChevronLeftIcon
        className='h-6 w-6 text-black cursor-pointer'/> </Link>
       
        <h1>My Order</h1>
      </div>
    
      <div className=' flex-col w-80'>
  {
         context.order?.[index]?.products.map( product => (//renderiza los elementos de order
        < OrderCard
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.image}
        price={product.price}
        />
      ))
   } 
    </div>

    </Layout>
  )
}

export default MyOrder