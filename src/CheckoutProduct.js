import React from 'react';
import StarIcon from '@mui/icons-material/Star';

import './Checkout.css';

function CheckoutProduct(props) {
  const starRating = Array(props.rating)
    .fill()
    .map((rating) => <StarIcon />);

  return (
    <div className="checkout__product">
      <div className="product__info">
        <p className="m-0">{props.title}</p>
        <p className="m-0 fw-bold">${props.price}</p>
        <div className="product__rating">{starRating}</div>
      </div>
      <div className="product__image d-flex justify-content-center">
        <img src={props.image} />
      </div>
      <div className="product__addButton mt-4 text-center">
        <button className="btn btn-primary fw-bold">Add to Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
