import { bannerService } from '../../services';
import { createAction } from '.';
import { FETCH_BANNER, START_LOADING, STOP_LOADING } from '../type/types';

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

export const getBanner = () => {
  return (dispatch) => {
    dispatch(startLoading());
    bannerService
      .getAllBaner()
      .then((res) => {
        dispatch(createAction(FETCH_BANNER, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};
