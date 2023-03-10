import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser } from '../../../redux/actions/user.action';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function ListUser() {
  const listUsers = useSelector((state) => state.defaultReducer.listUser);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const currentUser = JSON.parse(localStorage.getItem('token'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser(currentUser?.accessToken));
  }, []);

  return (
    <div className="container-listuser">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-5">
                <p>Quản lý Người dùng</p>
              </div>
            </div>
          </div>
          <table className="table">
            <thead classNane="table-dark">
              <tr>
                <th>STT</th>
                <th>Tên đăng nhập</th>
                <th>Email</th>
                <th>Quyền</th>
                <th>Xoá</th>
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
                  {' '}
                  {listUsers.map((item, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.fullname}</td>
                      <td>{item.email}</td>
                      <td>{item.role ? <p>Admin</p> : <p>User</p>}</td>
                      {currentUser?.accessToken ? (
                        <td>
                          <a
                            href="#!"
                            className="btn btn-danger"
                            onClick={() => {
                              dispatch(
                                deleteUser(item._id, currentUser?.accessToken)
                              );
                            }}
                          >
                            <i className="fa fa-trash"></i>
                          </a>
                        </td>
                      ) : (
                        <div
                          className="spinner-border"
                          role="status"
                          style={{ position: 'relative', left: '50%' }}
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
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

export default ListUser;
