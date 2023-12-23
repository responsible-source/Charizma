import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../../Context/Shop-context'



const Product = (props) => {
    const {AddtoCart, cartItems} = useContext(ShopContext);
    const {id, name, price, image} = props.data;
    const cartId = cartItems[id]
  return (
    <div className='container mt-5 mx-auto space-x-4 border-2 border-darkGrey rounded-lg '>
      <img src={image} className='w-100% h-70' alt="img" />
      <div className='pt-3 mx-auto text-center'>
      <p className='text-center text-xl'>{name}</p>
      <p className='text-center font-bold'>${price}</p>
      <button onClick={() =>AddtoCart(id)}  className='p-3 m-3 bg-black text-white rounded-lg hover:bg-darkGrey hover:text-darkBlack '>Add to Cart {cartId > 0 && <>({cartId})</>}</button>
      </div>
    </div>
  )
}

export default Product