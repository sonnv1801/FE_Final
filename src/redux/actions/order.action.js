import Swal from 'sweetalert2';
import { createAction } from '.';
import { orderSevice } from '../../services';
import {
  CONFIRM_ORDER,
  CREATE_ORDER,
  DELETE_ORDER,
  FETCH_DETAIL_ORDER,
  FETCH_ORDER,
  FETCH_ORDER_TODAY,
  LOGIN_FAILED,
  LOGIN_START,
  START_LOADING,
  STOP_LOADING,
} from '../type/types';

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

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

export const createOrder = (item, accessToken, navigate) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Bạn chắc xác nhận đơn hàng?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !',
    })
      .then((result) => {
        if (result.isConfirmed) {
          orderSevice.create(item, accessToken).then((res) => {
            dispatch(createAction(CREATE_ORDER, res.data));
          });
          Swal.fire('Đơn Hàng Đã Được Xác Nhận!', 'success');
          setTimeout(() => {
            navigate('/order');
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getOrder = () => {
  return (dispatch) => {
    dispatch(startLoading());
    orderSevice
      .getAllOrder()
      .then((res) => {
        dispatch(createAction(FETCH_ORDER, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(stopLoading());
      });
  };
};

export const getOrderToday = () => {
  return (dispatch) => {
    dispatch(startLoading());
    orderSevice
      .getAllOrderToday()
      .then((res) => {
        dispatch(createAction(FETCH_ORDER_TODAY, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(stopLoading());
      });
  };
};

export const getDetailOrder = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    orderSevice
      .getOrderById(id)
      .then((res) => {
        dispatch(createAction(FETCH_DETAIL_ORDER, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const deleteOrder = (id, accessToken) => {
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
          orderSevice.deleteOrder(id, accessToken).then((res) => {
            dispatch(createAction(DELETE_ORDER, res.data));
            dispatch(getOrder());
          });
          Swal.fire('Xóa Thành Công!', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const confirmOrder = (id, accessToken, navigate) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Bạn chắc xác nhận hóa đơn này?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !',
    })
      .then((result) => {
        if (result.isConfirmed) {
          orderSevice.confirmOrder(id, accessToken).then((res) => {
            dispatch(createAction(CONFIRM_ORDER, res.data));
            dispatch(getOrder());
          });
          Swal.fire('Xác Nhận Thành Công!', 'success');
          setTimeout(() => {
            navigate('/admin/orders');
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
