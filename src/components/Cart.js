import React from 'react';
import { useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../css/header.css';

const Cart = ({orders, setProducts, onChange}) => {

    const [subtotal, setSubtotal] = useState(0);

    // compute subtotal of all the purchases
    const getPrice = () => {
        let subtotal = 0;
        orders.map((order) => (
            subtotal += order.amount*order.price
        ))
        setSubtotal(subtotal);       
    }

    // remove item from cart
    const removeOrder = (id) => {
        const remainingProducts = orders.filter((order) => order.id !== id);
        setProducts(remainingProducts);
    }

    // get getPrice ready on load
    useEffect(() => {
        getPrice();
    })

  return (
    <div>
    <div >
        <div className='container'>
            <div style={{textAlign: 'center', padding: '10px'}}>
                <h5 className='fw-bolder text-info'>You have added {orders.length} items to your cart</h5>
            </div>
            <div className='table-responsive'>
            <Table className='table' hover>
                <thead>
                    <tr>
                    <th colSpan={2}></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan={2} className='text-start'>Total</th>
                    </tr>
                </thead>
                {
                    orders.map((order) => (
                        <tbody key={order.id}>
                            <tr>
                            <td>
                                <img style={{width: '100px'}} src={order.image} alt={`${order.image}`}/>
                            </td>
                            <td>
                                <div className='fw-bolder text-start'>{order.title}</div>
                                <div className='fw-light text-start' >{order.description}</div>
                            </td>
                            <td>${order.price}</td>
                            <td>
                                <div className='cart-quantity'>
                                    <Button variant="outline-secondary" className='btn btn-light' onClick={() => onChange(order, -1)}>-</Button>
                                    <Button variant="outline-secondary" className='btn btn-light'>{order.amount}</Button>
                                    <Button variant="outline-secondary" className='btn btn-light' onClick={() => onChange(order, 1)}>+</Button>
                                </div> 
                            </td>
                            <td className='fw-semibold'>${(order.price * order.amount).toFixed(2)}</td>
                            <td>
                                <Button className='btn btn-danger text-light' onClick={() => removeOrder(order.id)}>Remove</Button>                            
                            </td>
                            </tr>
                        </tbody>
                    ))
                } 
            </Table>
            </div>
        </div>

        <div className='container'>
            <Table responsive='sm' className='table table-borderless' >
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Subtotal: </td>
                        <td>${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Sales Tax:</td>
                        <td>${1.17}</td>
                    </tr>
                    <tr>
                        <td>Grand Total: </td>
                        <td as='h6'style={{fontSize: '20px'}}>${(subtotal*1.17).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <Button variant="outline-dark" onClick={() => {window.location.reload()}}>Check Out</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    </div>
  )
}

export default Cart;