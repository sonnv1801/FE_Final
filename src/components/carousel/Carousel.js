import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBanner } from '../../redux/actions/banner.action';

const Carousel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner());
  }, []);

  const listBanner = useSelector((state) => state.defaultReducer.listBanner);
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://clickbuy.com.vn/uploads/2023/02/slide-dat-hang-galaxy-s23-01-4.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          {listBanner.map((item) => (
            <div className="carousel-item" key={item._id}>
              <img src={item.image} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
