import Swal from 'sweetalert2';
import { createAction } from '.';
import { commentSevice } from '../../services';
import {
  ADD_CMT,
  CONFIRM_CMT,
  DELETE_CMT,
  FETCH_CMT,
  FETCH_DETAIL_CMT,
  START_LOADING,
  STOP_LOADING,
} from '../type/types';

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const getCMT = () => {
  return (dispatch) => {
    dispatch(startLoading());
    commentSevice
      .getCmt()
      .then((res) => {
        dispatch(createAction(FETCH_CMT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const createCmt = (id, accessToken) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Xác nhận đánh giá của bạn?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !',
    })
      .then((result) => {
        if (result.isConfirmed) {
          commentSevice.createCmt(id, accessToken).then((res) => {
            dispatch(createAction(ADD_CMT, res.data));
          });
          Swal.fire('Đánh giá thành công - Chờ Admin duyệt!', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailCMT = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    commentSevice
      .getCmtById(id)
      .then((res) => {
        dispatch(createAction(FETCH_DETAIL_CMT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const deleteCMT = (id, accessToken, navigate) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Bạn chắc chưa?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !',
    })
      .then((result) => {
        if (result.isConfirmed) {
          commentSevice.deleteCmt(id, accessToken).then((res) => {
            dispatch(createAction(DELETE_CMT, res.data));
            dispatch(getCMT());
          });
          Swal.fire('Xóa Thành Công!', 'success');
        }
        setTimeout(() => {
          navigate('/admin/rate');
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const confirmCMT = (id, accessToken, navigate) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Bạn chắc phê duyệt bình luận này?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !',
    })
      .then((result) => {
        if (result.isConfirmed) {
          commentSevice.confirmCMT(id, accessToken).then((res) => {
            dispatch(createAction(CONFIRM_CMT, res.data));
            dispatch(getCMT());
          });
          Swal.fire('Xác Nhận Thành Công!', 'success');
          setTimeout(() => {
            navigate('/admin/rate');
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
