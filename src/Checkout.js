import React from 'react';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';

import './Checkout.css';

function Checkout() {
  return (
    <div>
        <Header />
        <h2 className='p-3'>Your Shopping Basket</h2>
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
