import React from 'react';
import './style.css';
import StarIcon from '@mui/icons-material/Star';
import ReactStars from 'react-rating-stars-component';
import MyRate from '../myrate/MyRate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCMT } from '../../../../redux/actions/comment.action';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import RepcmtAd from '../../../admin/rateAdmin/repcmtAd/RepcmtAd';

const rate = [
  {
    id: 1,
    rate: 1,
    quantity: 1,
    progress: '10%',
  },
  {
    id: 2,
    rate: 2,
    quantity: 2,
    progress: '20%',
  },
  {
    id: 3,
    rate: 3,
    quantity: 5,
    progress: '50%',
  },
  {
    id: 4,
    rate: 4,
    quantity: 4,
    progress: '40%',
  },
  {
    id: 5,
    rate: 5,
    quantity: 5,
    progress: '50%',
  },
];

const RateProduct = (productDetail) => {
  const dispatch = useDispatch();

  const cmts = useSelector((state) => state.defaultReducer.listCMT);
  const user = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  useEffect(() => {
    dispatch(getCMT());
  }, []);

  const fliterCMT = cmts.filter(function (product, index, array) {
    return product.id_product === id;
  });

  const renderAmount = () => {
    return fliterCMT?.reduce((total, item) => {
      return (total += item.status);
    }, 0);
  };

  // const renderAmountRate = () => {
  //   return fliterCMT?.reduce((total, item) => {
  //     return (total += item.customer.rate);
  //   }, 0);
  // };
  return (
    <div className="rate-product">
      <h4>Đánh giá & Nhận xét {productDetail?.productDetail?.title}</h4>
      <div className="header-rate">
        {/* <div className="sub-header-left">
          <b>
            {(renderAmountRate() / renderAmount()).toFixed(2)}
            <StarIcon />
          </b>

          <i>({renderAmount()} đánh giá và nhận xét)</i>
        </div> */}
        {/* {rate.map((item, index) => (
          <div className="sub-header-right" key={index}>
            <span>{item.rate} sao</span>
            <div className="rating" style={{ width: `${item.progress}` }}></div>
            <span>{item.quantity} đánh giá</span>
          </div>
        ))} */}
      </div>

      <div className="body-rate">
        <MyRate productDetail={productDetail} fliterCMT={fliterCMT} />
        <h4>
          {renderAmount() === 0 ? (
            'Chưa có đánh giá nào cho sản phẩm này'
          ) : (
            <>
              {renderAmount()} đánh giá cho
              {productDetail?.productDetail?.title}
            </>
          )}
        </h4>
        <div className="sub-body-rate">
          {fliterCMT.map((item, index) => (
            <>
              {item.status !== 0 ? (
                <>
                  <div className="info-rate" key={index}>
                    <span>
                      {item.customer.fullname} –
                      {moment(item.createdAt).format('DD/MM/YYYY')}
                    </span>
                    <b id="rate-comment">
                      <ReactStars count={item.customer.rate} />
                    </b>
                  </div>
                  <p>{item.customer.comment}</p>
                  <RepcmtAd />
                </>
              ) : (
                <>
                  <div className="info-rate" key={index}>
                    <span>
                      {item.customer.fullname} –
                      {moment(item.createdAt).format('DD/MM/YYYY')}
                    </span>
                    <b id="rate-comment">
                      <ReactStars
                        count={item.customer.rate}
                        fliterCMT={fliterCMT}
                      />
                    </b>
                  </div>
                  <p>
                    Đánh Giá Này Của User <i>{item.customer.fullname}</i> - Đang
                    Được Duyệt
                  </p>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RateProduct;
