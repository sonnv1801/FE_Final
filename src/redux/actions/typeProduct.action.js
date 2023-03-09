import { typeProduct } from '../../services';
import { createAction } from '.';
import {
  ADD_TYPE,
  DELETE_TYPE,
  FETCH_TYPE_PRODUCT,
  START_LOADING,
  STOP_LOADING,
} from '../type/types';
import Swal from 'sweetalert2';

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

export const getAllTypeProduct = () => {
  return (dispatch) => {
    dispatch(startLoading());
    typeProduct
      .getAllTypeProduct()
      .then((res) => {
        dispatch(createAction(FETCH_TYPE_PRODUCT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const addType = (type, accessToken) => {
  return (dispatch) => {
    typeProduct
      .addType(type, accessToken)
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(ADD_TYPE, res.data));
        Swal.fire('Thêm thành công...', '', 'success');
      })
      .catch((err) => console.log(err));
  };
};
export const deleteType = (id, accessToken) => {
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
          typeProduct.deleteType(id, accessToken).then((res) => {
            dispatch(createAction(DELETE_TYPE, res.data));
            dispatch(getAllTypeProduct());
            dispatch(stopLoading());
          });
          Swal.fire('Xóa Thành Công!', 'success');
          dispatch(stopLoading());
        }
      })
      .catch((err) => console.log(err));
  };
};
