import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export const MenuShop = (typeShop) => {
  return (
    <div className="menu-shop">
      <ul>
        {typeShop.typeShop.map((item, index) => (
          <li key={index}>
            <Link to={`/product-detail/${item?._id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
