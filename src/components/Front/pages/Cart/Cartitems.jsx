import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../../Context/Shop-context';

const Cartitems = (props) => {
    const {id, name, price, image} = props.data;
    const {AddtoCart, RemovefromCart, cartItems } =useContext(ShopContext);
    const CartitemAmount = cartItems[id];
    
  return (
    <div className='container mt-10 mx-auto'>
        <div className='wrapper flex border-2 border-darkGrey rounded-lg'>
              <div className='mt-5 mb-5 ml-5'>
              <img className='w-50% h-[200px]' src={image} alt="img" />
              </div>
            <div className='grid pl-10'>
              <p className='text-[18px] pt-10'>{name}</p>
              <h3>${price}</h3>
              <div>
                <button onClick={()=> RemovefromCart(id)} className='font-bold text-[20px] pr-2'>-</button>
                <input className='border-2 border-black rounded-md w-[40px] text-center' type="text" value={CartitemAmount}  />
                <button onClick={()=> AddtoCart(id)} className='font-bold text-[20px] pl-2'>+</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitems