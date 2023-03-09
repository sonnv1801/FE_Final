import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Menu from '../menu/Menu';

const NavProduct = () => {
  return (
    <div className="nav-container-prd">
      <div className="nav-menu">
        <div className="menu-prd-detail">
          <p>
            <MenuOpenIcon />
          </p>
          <Menu />
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb body-product-detail">
            <li className="breadcrumb-item active list-product-detail">
              <Link href="#">Trang chủ</Link>
            </li>
            <li
              className="breadcrumb-item list-product-detail"
              aria-current="page"
            >
              <Link href="#">Điện Thoại</Link>
            </li>
            <li
              className="breadcrumb-item list-product-detail"
              aria-current="page"
            >
              <Link href="#">Iphone 14 serise</Link>
            </li>
            <li
              className="breadcrumb-item list-product-detail"
              aria-current="page"
            >
              <Link href="#">Iphone 14 pro max 256GB</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default NavProduct;
