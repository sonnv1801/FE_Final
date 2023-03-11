import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import MediaCard from '../../../components/cards/Card';
import NavProduct from '../../../components/navproduct/NavProduct';
import {
  filledProduct,
  getProductType,
  searchProduct,
} from '../../../redux/actions/product.action';
import { BodyProduct } from './bodyproduct/BodyProduct';
import { MenuShop } from './menushop/MenuShop';
import './style.css';
const Shop = () => {
  const location = useLocation();
  const listProductType = useSelector(
    (state) => state.defaultReducer.listProductType
  );
  const fillPrice = useSelector((state) => state.defaultReducer.fillPrice);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);

  const type = location.pathname.split('/')[2];
  const limit = 100;
  const filled = location.pathname.split('/')[3];
  const dispatch = useDispatch();
  const [key, setkey] = React.useState('');
  useEffect(() => {
    dispatch(getProductType(type, limit));
  }, []);
  useEffect(() => {
    dispatch(filledProduct(type, filled));
  }, []);
  const handleChange = (e) => {
    const key = e.target.value;
    setkey(key);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProduct(key));
  };
  const search = useSelector((state) => state.defaultReducer.search);

  if (search.length > 0) {
    return (
      <div className="search-container">
        <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0 ml-5">
          <input
            className="form-control mr-sm-2"
            type="text"
            name="search"
            onChange={handleChange}
            placeholder="Tìm kiếm"
            aria-label="Tìm kiếm"
          />
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            type="submit"
            style={{ right: '138px' }}
          >
            Tìm Kiếm
          </button>
        </form>
        <div
          className="container-content"
          style={{ margin: '0', marginTop: '2rem', justifyContent: 'center' }}
        >
          <h1>{`Đã Tìm Thấy ${search.length} Sản Phẩm`}</h1>
        </div>
        <div className="row mt-3">
          {search?.map((item, index) => (
            <div className="col-3 mb-2" key={index}>
              <MediaCard card={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <NavProduct /> */}
      <div className="shop-container">
        <MenuShop typeShop={listProductType} />
        <BodyProduct />

        {isLoading ? (
          <>
            <div
              className="spinner-border"
              role="status"
              style={{ position: 'relative', left: '50%' }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          <div className="shop-product">
            <div className="row">
              {filled ? (
                <>
                  <div
                    className="container-content"
                    style={{ margin: '0', marginBottom: '5px' }}
                  >
                    <h1>Danh Sách Lọc Theo Giá</h1>
                  </div>
                  {fillPrice.map((item, index) => (
                    <div className="col-3 mb-2" key={index}>
                      <MediaCard card={item} />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div
                    className="container-content"
                    style={{ margin: '0', marginBottom: '5px' }}
                  >
                    <h1>Danh Sách Sản Phẩm</h1>
                  </div>
                  {listProductType.map((item, index) => (
                    <div className="col-3 mb-2" key={index}>
                      <MediaCard card={item} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
        <div className="see-more">
          <button>
            <Link to="/">Xem thêm</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
