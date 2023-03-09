import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
export const HeaderPayment = () => {
  return (
    <div className="header-payment">
      <Link to="/">
        <button className="btn btn-outline-danger">
          <i ClassName="bx bxs-cart-add"></i>Mua thêm
        </button>
      </Link>
    </div>
  );
};
