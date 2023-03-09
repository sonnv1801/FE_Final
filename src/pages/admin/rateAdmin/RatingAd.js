import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCMT } from '../../../redux/actions/comment.action';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function RatingAd() {
  const dispatch = useDispatch();
  const cmts = useSelector((state) => state.defaultReducer.listCMT);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  useEffect(() => {
    dispatch(getCMT());
  }, []);

  return (
    <div className="container-RatingAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-5">
                <p>Quản lý đánh giá</p>
              </div>
            </div>
          </div>
          <table className="table">
            <thead classNane="table-dark">
              <tr>
                <th>Người dùng</th>
                <th>Email</th>
                <th>Đánh giá</th>
                <th>Trạng thái</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {isLoading === false ? (
                <>
                  {cmts.map((item, index) => (
                    <tr>
                      <td>{item.customer.fullname}</td>
                      <td>{item.customer.email}</td>
                      <td>{item.customer.comment}</td>
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
                        <Link to={`/admin/detailRating/${item?._id}`}>
                          <button className="btn btn-success">
                            <i className="bx bx-edit"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ margin: '0 auto' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RatingAd;
