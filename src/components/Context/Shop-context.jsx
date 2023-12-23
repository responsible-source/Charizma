import React, { createContext,useState } from 'react'
 import Data from '../Back/Data/Data'


 export const ShopContext = createContext({})

export const jsonApi = () =>{
  const cart = { };
  for(var i = 1; i <= Data.length; i++){
    cart[i] = 0;
  }
  return cart;
}



const ShopcontextProvider = (props) => {
  const[cartItems, SetcartItems] = useState(jsonApi())

  const AddtoCart = (ItemId) =>{
    SetcartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1}))
  }

  const RemovefromCart = (ItemId) =>{
    SetcartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1}))
  }

  const GetcartsubTotal = () =>{
      let subTotal = 0
      for(var item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = Data.find((product) => product.id === Number(item));
          subTotal += cartItems[item] * itemInfo.price;
        }
      }
      return subTotal
  }

  const CartTotal = ()=>{
     let grandTotal = 0;
     for(var item in cartItems){
      if(cartItems[item] > 0){
        var itemInfo = Data.find((product) => product.id === Number(item));
        grandTotal += cartItems[item] * itemInfo.price + 10
      }
     }
      return grandTotal
  }

  
  const ContextValue = {AddtoCart, RemovefromCart, cartItems, GetcartsubTotal, CartTotal}
  console.log(cartItems)
  return (
    <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopcontextProvider;