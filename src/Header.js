import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';

function Header() {
  return (
    <div className="header p-2 row align-items-center">
      <div className="col-2">
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">E-Shop</h2>
        </div>
      </div>
      <div className="col-7">
        <div className="header__search input-group">
          <input type="text" className="header_searchInput form-control" placeholder='Search Item' />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary search__button" type="button">
              <SearchIcon className="header_searchIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="row align-items-center justify-content-end pe-3">
          <div className="col-auto">
            <div className="nav__item">
              <div className="nav__itemLineOne">Hello Guest</div>
              <div className="nav__itemLineTwo">Sign In</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="nav__item">
              <div className="nav__itemLineOne">Your</div>
              <div className="nav__itemLineTwo">Shop</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="nav__item">
              <ShoppingBasketIcon className="itemBasket pe-2" />
              <span className="nav__itemLineTwo">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
