import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SubNav = () => {
  return (
    <div className="nav-title-header">
      <div className="sub-nav-body">
        <p>
          <Link to={`/shop/Samsung`}>
            Đặt mua sớm Samsung S23 Series, nhận ưu đãi lên tới 15 triệu. Đặt
            ngay !
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubNav;
