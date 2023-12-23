import React from 'react'
import Data from '../../../Back/Data/Data';
import Product from '../../pages/Shop/Product';

const Shop = () => {
  return (
    <div className='container mt-10 justify-center mx-auto items-center'>
        <div className='grid grid-flow-row grid-cols-3 space-x-4 gap-3'>
            {Data.map((products)=>(
                 <Product data ={products} key={products.id} />
            ))}
        </div>
    </div>
  )
}


export default Shop