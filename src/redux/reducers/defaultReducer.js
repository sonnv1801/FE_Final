import {
  ADD_CART,
  ADD_CMT,
  ADD_PRODUCT,
  ADD_TYPE,
  BUY_PRODUCT,
  DELETE_CART,
  DELETE_CMT,
  DELETE_ORDER,
  DELETE_PRODUCT,
  DELETE_TYPE,
  DELETE_USER,
  FETCH_BANNER,
  FETCH_CMT,
  FETCH_DETAIL,
  FETCH_DETAIL_CMT,
  FETCH_DETAIL_ORDER,
  FETCH_ORDER,
  FETCH_ORDER_TODAY,
  FETCH_PRODUCT,
  FETCH_PRODUCT_10DAYS,
  FETCH_PRODUCT_FILLED,
  FETCH_PRODUCT_SIMILAR,
  FETCH_PRODUCT_TYPE,
  FETCH_PRODUCT_TYPE_SAMSUNG,
  FETCH_TYPE_PRODUCT,
  FETCH_USERS,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  NUMBER_QUANTITY,
  REGISTER_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  SEARCH_PRODUCT,
  START_LOADING,
  STOP_LOADING,
} from '../type/types';
import Swal from 'sweetalert2';
const initialState = {
  listUser: [],
  listBanner: [],
  listType: [],
  listProduct: [],
  listProduct10days: [],
  listProductType: [],
  listProductTypeSamsung: [],
  listOrder: [],
  listOrderToday: [],
  listProductSimilar: [],
  listCMT: [],
  fillPrice: [],
  productDetail: null,
  orderDetail: null,
  cmtDetail: null,
  cart: [],
  selected: '',
  search: [],
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  register: {
    isFetching: false,
    error: false,
    success: false,
  },
  logout: {
    isFetching: false,
    error: false,
  },
};

const defaultReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_USERS: {
      state.listUser = payload;
      return { ...state }; //setState
    }
    case DELETE_USER: {
      let updateList = [...state.listUser];
      let index = updateList.findIndex((user) => user.id === action.id);
      if (index === -1) {
        updateList.splice(payload, index);
        state.listUser = updateList;
      }

      return { ...state };
    }
    case LOGIN_START: {
      state.login.isFetching = true;
      return { ...state };
    }
    case LOGIN_SUCCESS: {
      state.login.isFetching = false;
      state.login.currentUser = payload;
      state.login.error = false;
      return { ...state };
    }
    case LOGIN_FAILED: {
      state.login.isFetching = false;
      state.login.error = true;
      return { ...state };
    }
    case REGISTER_START: {
      state.register.isFetching = true;
      return { ...state };
    }
    case REGISTER_SUCCESS: {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
      return { ...state };
    }
    case REGISTER_FAILED: {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
      return { ...state };
    }
    //Banner
    case FETCH_BANNER: {
      state.listBanner = payload;
      return { ...state }; //setState
    }
    //Typroduct

    case FETCH_TYPE_PRODUCT: {
      state.listType = payload;
      return { ...state }; //setState
    }

    //Product

    case FETCH_PRODUCT: {
      state.listProduct = payload;
      return { ...state }; //setState
    }

    case FETCH_PRODUCT_FILLED: {
      state.fillPrice = payload;
      return { ...state }; //setState
    }

    case FETCH_PRODUCT_10DAYS: {
      state.listProduct10days = payload;
      return { ...state };
    }

    case FETCH_DETAIL: {
      state.productDetail = payload;
      return { ...state };
    }

    case FETCH_PRODUCT_SIMILAR: {
      state.listProductSimilar = payload;
      return { ...state };
    }

    case FETCH_PRODUCT_TYPE: {
      state.listProductType = payload;
      return { ...state };
    }

    case FETCH_PRODUCT_TYPE_SAMSUNG: {
      state.listProductTypeSamsung = payload;
      return { ...state };
    }

    case ADD_PRODUCT: {
      let updateList = [...state.listProduct];
      updateList.push(payload);
      state.listProduct = updateList;
      return { ...state };
    }

    case DELETE_PRODUCT: {
      let updateList = [...state.listProduct];
      let index = updateList.findIndex((product) => product.id === action.id);
      if (index === -1) {
        updateList.splice(payload, index);
        state.listProduct = updateList;
      }

      return { ...state };
    }
    //type
    case ADD_TYPE: {
      let updateList = [...state.listType];
      updateList.push(payload);
      state.listType = updateList;
      return { ...state };
    }
    case DELETE_TYPE: {
      let updateList = [...state.listType];
      let index = updateList.findIndex((type) => type.id === action.id);
      if (index === -1) {
        updateList.splice(payload, index);
        state.listType = updateList;
      }

      return { ...state };
    }

    //cart

    case ADD_CART: {
      let cart = [...state.cart];
      const index = cart.findIndex((cart) => {
        return (
          cart.id === action.payload.id &&
          cart.color === action.payload.color &&
          cart.store === action.payload.store
        );
      });

      if (index !== -1) {
        cart[index].quantity_cart += 1;
        Swal.fire('Đã thêm một sản phẩm trùng tên vào giỏ!', 'success');
      } else {
        cart = [...cart, action.payload];
        Swal.fire('Sản phẩm đã được thêm vào giỏ!', 'success');
      }

      // if (cart.color === action.payload.color) {
      //   cart[index].quantity_cart += 1;
      // }
      // cart.push(action.payload);
      // cart = [...cart, action.payload];

      state.cart = cart;
      localStorage.setItem('carts', JSON.stringify(cart));
      return { ...state };
    }
    case DELETE_CART: {
      let cart = [...state.cart];
      const index = cart.findIndex((cart) => {
        return cart.id === payload.id;
      });
      if (index !== -1) {
        cart.splice(cart[index], 1);
      }
      state.cart = cart;
      localStorage.setItem('carts', JSON.stringify(cart));
      return { ...state };
    }

    case NUMBER_QUANTITY: {
      let { status, product } = payload;
      let cart = [...state.cart];
      const index = cart.findIndex((cart) => {
        return cart.id === product.id;
      });
      if (index !== -1) {
        if (status) {
          cart[index].quantity_cart += 1;
        } else {
          if (cart[index].quantity_cart > 1) {
            cart[index].quantity_cart -= 1;
          } else {
            cart.splice(cart[index], 1);
          }
        }
      }
      state.cart = cart;
      localStorage.setItem('carts', JSON.stringify(cart));
      return { ...state };
    }

    case BUY_PRODUCT: {
      // if (state.login.currentUser === null) {
      //   Swal.fire('Đăng Nhập Đi!!!!', 'error');
      // } else {
      state.cart = [];
      // Swal.fire('Buy successfully!', '', 'success');
      // }
      return { ...state };
    }

    case SEARCH_PRODUCT: {
      const key = payload;
      state.selected = key;
      if (key === '') {
        state.search = [];
      } else {
        const update = state.listProduct.filter(
          (product) =>
            product.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        );
        state.search = update;
      }

      return { ...state };
    }

    // Order

    case FETCH_ORDER: {
      state.listOrder = payload;
      return { ...state }; //setState
    }

    case FETCH_ORDER_TODAY: {
      state.listOrderToday = payload;
      return { ...state }; //setState
    }

    case FETCH_DETAIL_ORDER: {
      state.orderDetail = payload;
      return { ...state };
    }
    case DELETE_ORDER: {
      let updateList = [...state.listOrder];
      let index = updateList.findIndex((order) => order.id === action.id);
      if (index === -1) {
        updateList.splice(payload, index);
        state.listOrder = updateList;
      }
      return { ...state };
    }

    //CMT

    case ADD_CMT: {
      let updateList = [...state.listCMT];
      updateList.push(payload);
      state.listCMT = updateList;
      return { ...state };
    }

    case FETCH_CMT: {
      state.listCMT = payload;
      return { ...state }; //setState
    }

    case FETCH_DETAIL_CMT: {
      state.cmtDetail = payload;
      return { ...state };
    }

    case DELETE_CMT: {
      let updateList = [...state.listCMT];
      let index = updateList.findIndex((cmt) => cmt.id === action.id);
      if (index === -1) {
        updateList.splice(payload, index);
        state.listCMT = updateList;
      }

      return { ...state };
    }
    case START_LOADING: {
      state.isLoading = true;
      return { ...state };
    }

    case STOP_LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return state;
  }
};

export default defaultReducer;
