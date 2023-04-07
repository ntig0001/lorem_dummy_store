import React from 'react';
import products from '../model/data';
import Product from './Product';

const Home = ({onPurchased}) => {
  return (
    <div>
      <div className='home'>
          {
              products.map((product) => (
                  <Product item={product} key={product.id} onPurchased={onPurchased}/>
              ))
          }
      </div>
    </div>
  )
}

export default Home