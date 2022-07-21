import React from 'react';
import Product from './Product';

import './Home.css';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt="home__image"
          className="home__image"
        />
        <div className="container">
          <div className="row home__row row_itemsTwo">
            <Product
              id="p1"
              title="Bag1"
              price="30"
              rating={5}
              image="https://m.media-amazon.com/images/I/81cB0YABm3L._SL1500_.jpg"
            />
            <Product
              id="p2"
              title="Bag2"
              price="35"
              rating={4}
              image="https://m.media-amazon.com/images/I/81cB0YABm3L._SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
