import { useContext } from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'

function MyOrders() {

  const context = useContext(ShoppingCartContext)
 // console.log('CART: ', context.order)
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4 mt-32  
      rounded-lg border border-violet-500 p-4 focus:outline-none
          shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-solid'>
       
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
     
      {
        context.order.map((order, index) => ( //para retornar los productos
         <Link key={index} to={`/my-orders/${index}`}>
           <OrdersCard 
             totalPrice={order.totalPrice}
             totalProducts={order.totalProducts} /> 
          </Link>
          
        ) )
      }
      
    </Layout>
  )
}

export default MyOrders