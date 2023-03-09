import React from 'react';
import './style.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="title-admin">
          <img className="logo-sidebar" src={logo} alt="..." />
          <p>Quản trị viên: Philip</p>
        </div>
        <ul className="nav-link-sidebar">
          <li>
            <Link to={'/admin/user'}>
              <i className="bx bxs-user-pin"></i>
              <span claName="link-name">Quản lý Người dùng</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/product'}>
              <i className="bx bxs-devices"></i>
              <span className="link-name">Quản lý Sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/type'}>
              <i className="bx bx-windows"></i>
              <span claName="link-name">Quản lý Mặt hàng</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/orders'}>
              <i className="bx bxs-receipt"></i>
              <span className="link-name">Quản lý Đơn hàng</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/orders/today'}>
              <i className="bx bxs-inbox"></i>
              <span className="link-name">Đơn Hàng Hôm Nay</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/rate'}>
              <i className="bx bx-message-dots"></i>
              <span className="link-name">Đánh giá khách hàng</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
