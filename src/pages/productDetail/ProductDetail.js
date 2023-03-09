import React from 'react';
import CenterProductDetail from './centerProductDetail/CenterProductDetail';
import LeftProductDetail from './leftProductDetail/LeftProductDetail';
import RateProduct from './rateproduct/RateProduct';
import RightProductDetail from './rightProductDetail/RightProductDetail';
import SalientFeature from './salientfeature/SalientFeature';
import SimilarProduct from './similarproduct/SimilarProduct';
import Specification from './specification/Specification';
import GradeIcon from '@mui/icons-material/Grade';
import './style.css';
import NavProduct from '../../components/navproduct/NavProduct';

const ProductDetail = () => {
  return (
    <>
      <NavProduct />
      <div className="container-product-detail">
        <h1>iPhone 14 Pro Max 256GB chính hãng VNA</h1>
        <p>
          <GradeIcon /> <GradeIcon /> <GradeIcon /> <i>(59 đánh giá)</i>
        </p>
        <div className="row">
          <div className="col-4">
            <LeftProductDetail />
          </div>
          <div className="col-4">
            <CenterProductDetail />
          </div>
          <div className="col-4">
            <RightProductDetail />
          </div>
        </div>
        <SimilarProduct />
        <div className="row">
          <div className="col-8">
            <SalientFeature />
            <RateProduct />
          </div>
          <div className="col-4">
            <Specification />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
