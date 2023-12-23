import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Data from '../../../Back/Data/Data'
import { ShopContext } from '../../../Context/Shop-context'
import Cartitems from './Cartitems'


const Cart = () => {
  const {cartItems, GetcartsubTotal, CartTotal} =useContext(ShopContext); 
  const Navigate = useNavigate()
  return (
    <div>
      <div>
      <h1 className='mt-5 text-center text-3xl'>My Cart</h1>
      <div className='cart-items'>
      {Data.map((product) =>{
        if(cartItems[product.id] !== 0){
          return <Cartitems data={product} />
        }
        else{
          console.log('empty cart')
        }
      })}
      </div>
      
      </div>
      {GetcartsubTotal() > 0 ? (<><div className='checkout'>
        <div className='bg-black w-[700px] text-white mt-10 mb-10 p-5 rounded-lg mx-auto '>
        <p className='text-[14px]'>Sub Total : ${GetcartsubTotal()}</p>
        <p className='text-[14px]'>Delivery Fee: $10</p>
        <p className='text-[14px]'>Shipping Fee: $0</p>
        <p className='text-[24px]'>Total: ${CartTotal()} </p>
        </div>

        <div className='flex justify-center items-center mb-10'>
          <button onClick={() => Navigate('/')} className='mr-5 p-3 bg-black text-white rounded-md hover:bg-darkGrey hover:text-darkBlack'>Continue Shopping</button>
          <button className='ml-5 p-3 bg-black text-white rounded-md hover:bg-darkGrey hover:text-darkBlack'>Proceed to Checkout</button>
        </div>
        </div></>) : (<p className='font-bold text-center text-3xl mt-[120px]'>Your cart is Empty...Start Shopping bro</p>)}
        
      
    </div>
    
  )
}

export default Cart

