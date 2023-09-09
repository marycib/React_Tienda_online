import { ChevronRightIcon } from '@heroicons/react/24/solid'



const OrdersCard = props => {
  const { totalPrice, totalProducts } = props
  



  return (
    <div className="flex justify-between
     items-center mb-3  rounded-lg w-80 p-4  border border-violet-500 focus:outline-none
     shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-solid ">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
        <span className='font-light'>01.02.23</span>
      <span className='font-light'>{totalProducts} articles</span>
      </p>    
      <p className='flex items-center gap.3'>
        <span className='font-medium text-2xl'>${totalPrice} </span>
        <ChevronRightIcon
            className='h-6 w-6 text-black cursor-pointer border border-violet-500 focus:outline-none
            shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-solid rounded ml-2'>
            </ChevronRightIcon>
      </p>
      
      </div>
      
    </div>
  )
}

export default OrdersCard