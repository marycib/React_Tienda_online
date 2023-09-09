import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-8 decoration-violet-700'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light shadow-[10px_10px_0px_0px_rgba(109,40,217)] border-solid border-4 bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-4xl text-violet-700'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/clothing'
            onClick={() => context.setSearchByCategory('clothing')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
       Clothing
          </NavLink>
        </li>
        
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/jewelery'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
           Jewelery
          </NavLink>
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60 '>
          jhondoe@gmail.com
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li className=' bg-slate-100 hover:bg-violet-300 border-double border-4 border-indigo-600 p-2 rounded'>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar