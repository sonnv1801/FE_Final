import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaCard from '../../../components/cards/Card';
import Carousel from '../../../components/carousel/Carousel';
import Menu from '../../../components/menu/Menu';
import Repost from '../../../components/repost/Repost';
import TitleHead from '../../../components/title/TitleHead';
import {
  getProduct,
  getProduct10days,
  getProductType,
  getProductTypeSamsung,
} from '../../../redux/actions/product.action';
import { getAllTypeProduct } from '../../../redux/actions/typeProduct.action';
import EveryFlashSale from './everyflashsale/EveryFlashSale';
import './style.css';
import SubNav from './subnav/SubNav';
import TypeNav from './typenav/TypeNav';
const HomePage = () => {
  const listProduct = useSelector((state) => state.defaultReducer.listProduct);
  const listProductType = useSelector(
    (state) => state.defaultReducer.listProductType
  );
  const listProduct10Days = useSelector((state) => state.defaultReducer);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const listType = useSelector((state) => state.defaultReducer.listType);
  const ProductSamsung = useSelector(
    (state) => state.defaultReducer.listProductTypeSamsung
  );
  const type = 'Iphone';
  const limit = 8;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    dispatch(getProductTypeSamsung(limit));
  }, []);

  useEffect(() => {
    dispatch(getProduct10days());
  }, []);

  useEffect(() => {
    dispatch(getProductType(type, limit));
  }, []);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);
  return (
    <div className="main-home">
      <SubNav />
      <div className="row">
        <div className="col-xl-3" style={{ width: '20%' }}>
          <div className="menu-home">
            <Menu product={listProduct} />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="menu-home">
            <Carousel />
            <TypeNav />
          </div>
        </div>
        <div className="col-xl-3" style={{ width: '20%' }}>
          <div className="menu-home">
            <Repost />
          </div>
        </div>
      </div>
      {/* <EveryFlashSale listProducts={listProduct10Days} /> */}
      <TitleHead typeProduct={listType} />
      {isLoading ? (
        <div
          className="spinner-border"
          role="status"
          style={{ position: 'relative', left: '50%' }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="card-product-home">
          <div className="row">
            {listProductType.map((item, index) => (
              <div className="col-xl-3 mt-3" key={index}>
                <MediaCard card={item} />
              </div>
            ))}
          </div>
        </div>
      )}
      <TitleHead typeProduct={listType} />
      {isLoading ? (
        <div
          className="spinner-border"
          role="status"
          style={{ position: 'relative', left: '50%' }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="card-product-home">
          <div className="row">
            {ProductSamsung.map((item, index) => (
              <div className="col-xl-3 mt-3" key={index}>
                <MediaCard card={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
