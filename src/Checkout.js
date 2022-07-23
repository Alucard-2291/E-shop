import React from 'react';
import Header from './Header';

import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  return (
    <div>
        <Header />
        <h2 className='p-3'>YOur Shopping Basket</h2>
        <div className='row'>            
            <div className="col-9">
                <div className='checkout__list'>
                    <CheckoutProduct />
                </div>
            </div>
            <div className='col-3'></div>
        </div>
    </div>
  );
}

export default Checkout;
