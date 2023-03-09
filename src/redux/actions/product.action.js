import { color } from '@mui/system';
import Swal from 'sweetalert2';
import { createAction } from '.';
import { productSevice } from '../../services';
import {
  ADD_CART,
  ADD_PRODUCT,
  BUY_PRODUCT,
  DELETE_CART,
  DELETE_PRODUCT,
  FETCH_DETAIL,
  FETCH_PRODUCT,
  FETCH_PRODUCT_10DAYS,
  FETCH_PRODUCT_FILLED,
  FETCH_PRODUCT_SIMILAR,
  FETCH_PRODUCT_TYPE,
  FETCH_PRODUCT_TYPE_SAMSUNG,
  NUMBER_QUANTITY,
  SEARCH_PRODUCT,
  START_LOADING,
  STOP_LOADING,
  UPDATE_PRODUCT,
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

export const getProduct = () => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getAllProduct()
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const filledProduct = (type, filled) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getFilledPrice(type, filled)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_FILLED, res.data));
        dispatch(getProduct());
      })
      .catch((err) => {
        dispatch(stopLoading());
      });
  };
};

export const getProduct10days = () => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProduct10days()
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_10DAYS, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getDetail = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_DETAIL, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProductSimilar = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProductSimilar(id)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_SIMILAR, res.data));
        dispatch(getProduct());
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProductType = (type, limit) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProductType(type, limit)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_TYPE, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProductTypeSamsung = (limit) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProductTypeSamsung(limit)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_TYPE_SAMSUNG, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const addCart = (product, color, store) => {
  const productCart = {
    id: product.id,
    title: product.title,
    image: product.image,
    newPrice: product.newPrice,
    quantity_cart: 1,
    color: color,
    store: store,
  };
  return (dispatch) => {
    dispatch(createAction(ADD_CART, productCart))
      .then(() => {
        Swal.fire('Add Successfully!', 'success');
      })
      .catch(() => {
        Swal.fire('Add not Successfully!', 'warning');
      });
  };
};

export const deleteCart = (product) => {
  return (dispatch) => {
    dispatch(createAction(DELETE_CART, product));
  };
};

export const numberQuantity = (product, status) => {
  return (dispatch) => {
    dispatch(createAction(NUMBER_QUANTITY, { product, status }));
  };
};

export const buyProduct = (navigate) => {
  return (dispatch) => {
    dispatch(createAction(BUY_PRODUCT));
  };
};

export const searchProduct = (keyword) => {
  return (dispatch) => {
    dispatch(createAction(SEARCH_PRODUCT, keyword));
    console.log(keyword);
  };
};

//Product Admin

export const updateProduct = (id, item, navigate) => {
  return (dispatch) => {
    productSevice
      .updateProduct(id, item, navigate)
      .then((res) => {
        dispatch(createAction(UPDATE_PRODUCT, res.data));
        dispatch(getProduct());
        Swal.fire('Update Successfully...', '', 'success');
        setTimeout(() => {
          navigate('/admin');
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
};

export const deleteProduct = (id, accessToken) => {
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
          productSevice.deleteProduct(id, accessToken).then((res) => {
            dispatch(createAction(DELETE_PRODUCT, res.data));
            dispatch(getProduct());
          });
          Swal.fire('Xóa Thành Công!', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addProduct = (item, accessToken) => {
  return (dispatch) => {
    productSevice
      .addProduct(item, accessToken)
      .then((res) => {
        dispatch(createAction(ADD_PRODUCT, res.data));
        // dispatch(getProduct());
        Swal.fire('Thêm thành công...', '', 'success');
      })
      .catch((err) => console.log(err));
  };
};
