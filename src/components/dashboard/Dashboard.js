import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCMT } from '../../redux/actions/comment.action';
import { getOrder, getOrderToday } from '../../redux/actions/order.action';
import { getProduct } from '../../redux/actions/product.action';
import { getAllTypeProduct } from '../../redux/actions/typeProduct.action';
import { getAllUser } from '../../redux/actions/user.action';
import './style.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();

  const listProductAdmin = useSelector(
    (state) => state.defaultReducer.listProduct
  );
  const listUserAdmin = useSelector((state) => state.defaultReducer.listUser);
  const listTypeAdmin = useSelector((state) => state.defaultReducer.listType);
  const listOrderAd = useSelector((state) => state.defaultReducer.listOrder);
  const cmts = useSelector((state) => state.defaultReducer.listCMT);
  const listOrderToday = useSelector(
    (state) => state.defaultReducer.listOrderToday
  );
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  useEffect(() => {
    dispatch(getAllUser(currentUser?.accessToken));
  }, []);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);
  useEffect(() => {
    dispatch(getOrder());
  }, []);
  useEffect(() => {
    dispatch(getOrderToday());
  }, []);

  useEffect(() => {
    dispatch(getCMT());
  }, []);
  return (
    <div className="container-dashboard">
      <div className="title-dashboard"> Thống Kê</div>
      {/* <div className="group-detail-board">
        <div className="detail-board">
          <ul>
            <div style={{ marginLeft: '1rem' }}>
              <div className="detail-info" style={{ background: '#17a2b8' }}>
                <div className="left-info">
                  <h3>{listProductAdmin.length}</h3>
                  <p>Tất cả sản phẩm</p>
                </div>
                <i className="bx bx-shopping-bag"></i>
              </div>
              <div>
                <a href="#!">
                  <li style={{ background: '#1591a5' }}>
                    Xem thêm <i className="bx bxs-right-arrow-circle"></i>
                  </li>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div> */}
      <div className="cotainer-admin">
        <div className="row">
          <div className="col-4">
            <div className="container-length">
              <div className="sub-length">
                <div className="row">
                  <div className="col-6">
                    <h4>{listUserAdmin.length}</h4>
                  </div>
                  <div className="col-6">
                    <i className="bx bxs-user-pin"></i>
                  </div>
                  <span>Tất cả người dùng</span>
                </div>
              </div>
              <div className="sub-more">
                <Link to={'/admin/user'}>
                  <b>
                    Xem Thêm <i class="fa fa-arrow-circle-o-right"></i>
                  </b>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container-length">
              <div className="sub-length">
                <div className="row">
                  <div className="col-6">
                    <h4>{listProductAdmin.length}</h4>
                  </div>
                  <div className="col-6">
                    <i className="bx bxs-devices"></i>
                  </div>
                  <span>Tất cả sản phẩm</span>
                </div>
              </div>
              <div className="sub-more">
                <Link to={'/admin/product'}>
                  <b>
                    Xem Thêm <i class="fa fa-arrow-circle-o-right"></i>
                  </b>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container-length">
              <div className="sub-length">
                <div className="row">
                  <div className="col-6">
                    <h4>{listTypeAdmin.length}</h4>
                  </div>
                  <div className="col-6">
                    <i className="bx bx-windows"></i>
                  </div>
                  <span>Tất cả mặt hàng</span>
                </div>
              </div>
              <div className="sub-more">
                <Link to={'/admin/type'}>
                  <b>
                    Xem Thêm <i class="fa fa-arrow-circle-o-right"></i>
                  </b>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container-length">
              <div className="sub-length">
                <div className="row">
                  <div className="col-6">
                    <h4>{listOrderAd.length}</h4>
                  </div>
                  <div className="col-6">
                    <i className="bx bxs-receipt"></i>
                  </div>
                  <span>Tất cả đơn hàng</span>
                </div>
              </div>
              <div className="sub-more">
                <Link to={'/admin/orders'}>
                  <b>
                    Xem Thêm <i class="fa fa-arrow-circle-o-right"></i>
                  </b>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container-length">
              <div className="sub-length">
                <div className="row">
                  <div className="col-6">
                    <h4>{listOrderToday.length}</h4>
                  </div>
                  <div className="col-6">
                    <i className="bx bxs-inbox"></i>
                  </div>
                  <span>Đơn hàng hôm nay</span>
                </div>
              </div>
              <div className="sub-more">
                <Link to={'/admin/orders/today'}>
                  <b>
                    Xem Thêm <i class="fa fa-arrow-circle-o-right"></i>
                  </b>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container-length">
              <div className="sub-length">
                <div className="row">
                  <div className="col-6">
                    <h4>{cmts.length}</h4>
                  </div>
                  <div className="col-6">
                    <i className="bx bx-message-dots"></i>
                  </div>
                  <span>Tất cả đánh giá</span>
                </div>
              </div>
              <div className="sub-more">
                <Link to={'/admin/rate'}>
                  <b>
                    Xem Thêm <i class="fa fa-arrow-circle-o-right"></i>
                  </b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
