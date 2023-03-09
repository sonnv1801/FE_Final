import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './style.css';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../../../redux/actions/product.action';
export const BodyProduct = () => {
  const location = useLocation();
  const type = location.pathname.split('/')[2];
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 200);
  }
  const dispatch = useDispatch();
  const [key, setkey] = React.useState('');
  const handleChange = (e) => {
    const key = e.target.value;
    setkey(key);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProduct(key));
    // setkey("")
  };

  return (
    <div className="body-product">
      {/* <b>Chọn theo tiêu chí</b> */}
      {/* <div className="sub-body-product">
        <select>
          <option selected>$ Giá</option>
          <option>Dưới 3 triệu</option>
          <option>Dưới 5 triệu</option>
          <option>Dưới 8 triệu</option>
        </select>
        <select>
          <option selected>Bộ nhớ trong</option>
          <option>8 Gb</option>
          <option>16 Gb</option>
          <option>32 Gb</option>
        </select>
      </div> */}
      <b>Sắp xếp theo</b>
      <div className="sub-body-arrange">
        <Link to={`/shop/${type}/1`} onClick={refreshPage}>
          <i>
            <ArrowUpwardIcon /> Giá thấp - cao
          </i>
        </Link>
        <Link to={`/shop/${type}/-1`} onClick={refreshPage}>
          <i>
            <ArrowDownwardIcon /> Giá cao - thấp
          </i>
        </Link>
        <form
          onSubmit={handleSearch}
          className="form-inline my-2 my-lg-0 ml-5 search-form"
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            // value={key}
            name="search"
            onChange={handleChange}
            placeholder="Tìm kiếm"
            aria-label="Tìm kiếm"
          />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  );
};
