import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Header = () => {
  return (
    <nav className='bg-darkBlack'>
        <div className='container flex justify-between mx-auto p-5'>
            <Link to='/' className='text-white text-3xl justify-start capitalize'>Charizma</Link>
            
            <ul className='text-white flex justify-between space-x-4 pt-2'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/cart'><ShoppingCart size={28} /></Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header