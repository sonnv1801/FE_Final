import React from 'react';
import './style.css';
function Menu() {
  const user = JSON.parse(localStorage.getItem('token'));
  return (
    <div>
      <div className="sidebar">
        <div className="title_sidebar">
          <div className="avarta-sidebar"></div>
          <div className="username-sidebar">
            <span>Khách hàng</span>
            <p>{user.fullname}</p>
          </div>
        </div>

        <div className="menu">
          <div className="item">
            <a href="#!">
              <i className="fas fa-user-circle"></i>
              Thông tin khách hàng
              <i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="fas fa-address-card"></i>
              Thông báo của tôi<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="	fa fa-file-text"></i>
              Đơn đặt hàng<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="fas fa-blender-phone"></i>
              Phiếu nhận hàng<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="fas fa-cart-arrow-down"></i>
              Lịch sử sửa chữa<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="fas fa-book-reader"></i>
              Sổ địa chỉ<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="fa fa-ticket"></i>
              Ví voucher<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="fas fa-search-dollar"></i>
              Tra cứu thanh toán<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <i className="	fas fa-sign-out-alt"></i>
              Thoát<i className="fas fa-angle-right dropdown"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
