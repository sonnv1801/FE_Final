import React, { useEffect } from 'react';
import Sidebar from '../../sidebaradmin/Sidebar';
import user from '../../../../assets/user.png';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  confirmCMT,
  deleteCMT,
  getDetailCMT,
} from '../../../../redux/actions/comment.action';
import { useLocation, useNavigate } from 'react-router-dom';
function DetailRateAd() {
  const dispatch = useDispatch();
  const cmtDetail = useSelector((state) => state.defaultReducer.cmtDetail);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('token'));
  const path = location.pathname.split('/')[3];
  useEffect(() => {
    dispatch(getDetailCMT(path));
  }, []);
  return (
    <div className="container-DetailRateAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-7">
                <p>Xem chi tiết đánh giá</p>
              </div>
            </div>
          </div>

          <div className="box-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={user}
                    alt="avatar"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">
                      {cmtDetail?.customer.fullname}
                    </h6>
                    <p className="text-muted small mb-0">
                      {cmtDetail?.createdAt}
                    </p>
                    <h5>{cmtDetail?.customer.rate} Sao</h5>
                  </div>
                </div>

                <h5 className="mt-3">{cmtDetail?.customer.comment}</h5>
                <div className="card-footer ">
                  <div className="float-end">
                    {cmtDetail?.status === 0 ? (
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() =>
                          dispatch(
                            confirmCMT(path, currentUser?.accessToken, navigate)
                          )
                        }
                      >
                        Phê duyệt
                      </button>
                    ) : (
                      'Đã Duyệt'
                    )}

                    {cmtDetail?.status === 0 ? (
                      <button
                        onClick={() =>
                          dispatch(
                            deleteCMT(path, currentUser?.accessToken, navigate)
                          )
                        }
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                      >
                        Xoá ngay và luôn
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRateAd;
