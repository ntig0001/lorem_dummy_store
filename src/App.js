import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {

  const [isHome, setIsHome] = useState(true);
  const [products, setProducts] = useState([]);

  // add item to cart and return if it's already ordered
  const onPurchased = (purchase) => {
    let is_ordered = false;
    products.forEach((order_item)=> {
      if (purchase.id === order_item.id) is_ordered = true;
    })
    if (is_ordered) return;
    setProducts([...products, purchase]);
  }

  // increase or decrease ordered item's quantity and remove item if quantity is null
  const onChange = (order, quantity) => {
    let order_index = -1;
    products.forEach((product, index) => {
      if (product.id === order.id) order_index = index;
    });
    const temp_products = products;
    temp_products[order_index].amount += quantity;
    if (temp_products[order_index].amount === 0) {
      removeOrder(temp_products, temp_products[order_index].id);
      return;
    }
    setProducts([...temp_products]);
  }

  // remove item whose quantity is null
  const removeOrder = (temp_products, id) => {
    const remainingProducts = temp_products.filter((product) => product.id !== id);
    setProducts(remainingProducts);
  }

  return (
      <React.Fragment>
        <Header size={products.length} setIsHome={setIsHome}/>
        {
          isHome ? <Home onPurchased={onPurchased}/> : 
            
          <Cart orders={products} setProducts={setProducts} onChange={onChange} />
        }
      </React.Fragment>
  )
}

export default App;