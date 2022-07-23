import React from 'react';
import StarIcon from '@mui/icons-material/Star';

import './Checkout.css';

function CheckoutProduct() {
  <div className="row">
    <div className="col-3">Image</div>
    <div className="col-9">
      <p className="m-0 fw-bold">Bag</p>
      <p className="">$11.96</p>
      <div className="rating">
        <StarIcon />
      </div>
      <button>Remove from Basket</button>
    </div>
  </div>;
}

export default CheckoutProduct;
