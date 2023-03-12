import numeral from 'numeral';
import React from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrder } from '../../../../redux/actions/order.action';
import './style.css';
import { getProduct } from '../../../../redux/actions/product.action';

export const HeaderOrder = () => {
  const currentUser = JSON.parse(localStorage.getItem('token'));
  const orders = useSelector((state) => state.defaultReducer.listOrder);
  const products = useSelector((state) => state.defaultReducer.listProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, []);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const fliterOrder = orders.filter(function (product, index, array) {
    return product.customer.customerId === currentUser._id;
  });

  const renderAmount = () => {
    return fliterOrder.reduce((total, item) => {
      return (total += item.total);
    }, 0);
  };

  return (
    <>
      {fliterOrder.length === 0 ? (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ margin: '2rem' }}
        >
          Hiện Tại Chưa Có Hóa Đơn Nào - Mua Thêm Đi!!!
          <div
            className="spinner-border text-danger"
            role="status"
            style={{ float: 'right' }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="header-order-container">
          <p>Cảm ơn bạn. Đơn hàng của bạn đã được nhận</p>
          {fliterOrder.map((item, index) => (
            <div className="sub-header-order" key={index}>
              <p>
                {item.status === 0 ? 'Đang Chờ Xử Lý' : 'Đơn Hàng Đã Xử Lý'}
              </p>
              <span>Mã Đơn {index} </span>
              <b>{item._id}</b>
              <span>Ngày</span>
              <b>{moment(item.createdAt).format('DD/MM/YYYY')}</b>
              <span>Tổng</span>
              <b>{`${numeral(item.total).format('0,0')}đ`}</b>
              <span>Phương thức thanh toán</span>
              <b>Thanh Toán Khi Nhận</b>
              {item?.status === 0 ? (
                <button
                  onClick={() => {
                    dispatch(deleteOrder(item._id, currentUser?.accessToken));
                  }}
                >
                  Hủy Đơn Hàng
                </button>
              ) : null}
            </div>
          ))}
          <p>Trả tiền mặt khi giao hàng</p>
          <b>Chi tiết đơn hàng</b>
          <div className="footer-order">
            {fliterOrder.map((item, index) => (
              <table className="table">
                <thead>
                  <tr key={index}>
                    <th scope="col">Mã Đơn Hàng {index}</th>
                    <th scope="col">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>{item._id}</span>
                    </td>
                    <td> {`${numeral(item.total).format('0,0')}đ`}</td>
                  </tr>
                </tbody>
              </table>
            ))}
            <table className="table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th scope="col">Tổng Hóa Đơn Của Bạn:</th>
                  <th scope="col">{`${numeral(renderAmount()).format(
                    '0,0'
                  )}đ`}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
