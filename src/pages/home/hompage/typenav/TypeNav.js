import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypeProduct } from '../../../../redux/actions/typeProduct.action';

const TypeNav = () => {
  const dispatch = useDispatch();
  const listType = useSelector((state) => state.defaultReducer.listType);
  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);

  return (
    <>
      <div className="type-nav">
        <ul>
          {listType.map((item, index) => (
            <Link to={`/shop/${item.name}`} key={index}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="nav-img">
        <Link to="/">
          <img
            src="https://clickbuy.com.vn/uploads/2023/01/bgw-iphone-chinh-hang-bao-hanh-24-thang-01.png"
            alt="...."
          />
        </Link>
      </div>
    </>
  );
};

export default TypeNav;
