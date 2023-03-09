import React, { useEffect } from 'react';
import CenterProductDetail from './centerProductDetail/CenterProductDetail';
import LeftProductDetail from './leftProductDetail/LeftProductDetail';
import RateProduct from './rateproduct/RateProduct';
import RightProductDetail from './rightProductDetail/RightProductDetail';
import SalientFeature from './salientfeature/SalientFeature';
import ReactStars from 'react-rating-stars-component';
import Specification from './specification/Specification';
import GradeIcon from '@mui/icons-material/Grade';
import './style.css';
import NavProduct from '../../../components/navproduct/NavProduct';
import SimilarProduct from './similarproduct/SimilarProduct';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetail,
  getProductSimilar,
} from '../../../redux/actions/product.action';

const ProductDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.split('/')[2];
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  const productDetail = useSelector(
    (state) => state.defaultReducer.productDetail
  );

  const ProductSimilar = useSelector(
    (state) => state.defaultReducer.listProductSimilar
  );
  useEffect(() => {
    dispatch(getProductSimilar(id));
  }, []);

  return (
    <>
      {/* <NavProduct /> */}
      <div className="container-product-detail">
        <h1>{productDetail?.title}</h1>
        <span id="color-tile-card-dt">
          <ReactStars count={productDetail?.rates} />
        </span>
        <div className="row">
          <div className="col-4">
            <LeftProductDetail leftProduct={productDetail} />
          </div>
          <div className="col-4">
            <CenterProductDetail ceterProduct={productDetail} />
          </div>
          <div className="col-4">
            <RightProductDetail />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {/* <SalientFeature /> */}
            <RateProduct productDetail={productDetail} />
          </div>
          <div className="col-4">
            <Specification />
          </div>
        </div>
        <br />
        <SimilarProduct productSimilar={ProductSimilar} />
      </div>
    </>
  );
};

export default ProductDetail;
