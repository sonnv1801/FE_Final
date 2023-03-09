import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrder } from '../../../redux/actions/order.action';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function ListOderAdmin() {
  const listOrderAd = useSelector((state) => state.defaultReducer.listOrder);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, []);
  return (
    <div className="container-listOderAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-5">
                <p>Quản lý Đơn hàng</p>
              </div>
            </div>
          </div>
          <table className="table">
            <thead classNane="table-dark">
              <tr>
                <th>Mã hóa đơn</th>
                <th>Thời gian</th>
                <th>Khách hàng</th>
                <th>Tổng tiền hàng</th>
                <th>Trạng thái</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ margin: '0 auto' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  {listOrderAd.map((item, index) => (
                    <tr>
                      <td>#{index}</td>
                      <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                      <td>{item.customer.fullname}</td>
                      <td>{`${numeral(item.total).format('0,0')}đ`}</td>
                      <td>
                        <p style={{ margin: '0' }}>
                          {item.status === 0 ? (
                            <>
                              <span>Chờ Xử Lý</span>
                              <div
                                className="spinner-border"
                                role="status"
                                style={{ margin: '0 auto' }}
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <span>Đã Xử Lý</span>
                              <i
                                className="fa fa-check"
                                style={{
                                  color: 'green',
                                  fontSize: '26px',
                                  margin: '6px',
                                }}
                              ></i>
                            </>
                          )}
                        </p>
                      </td>
                      <td>
                        <Link to={`/admin/detailorder/${item?._id}`}>
                          <button className="btn btn-success">
                            <i className="bx bx-edit"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListOderAdmin;
