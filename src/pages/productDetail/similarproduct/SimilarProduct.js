import React from 'react';
import Card from '../../../components/cards/Card';
import './style.css';

const SimilarProduct = () => {
  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Sản phẩm tương tự
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Phụ kiện mua cùng
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h1 className="title-similar-prd">Sản phẩm tương tự</h1>
          <div className="row">
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
