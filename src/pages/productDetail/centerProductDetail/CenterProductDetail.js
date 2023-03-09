import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

const colors = [
  {
    id: 1,
    name: 'Đỏ',
    price: '30,890,000 ₫',
    color: 'red',
  },
  {
    id: 2,
    name: 'Tím',
    price: '31,890,000 ₫',
    color: 'purple',
  },
  {
    id: 3,
    name: 'Green',
    price: '32,890,000 ₫',
    color: 'green',
  },
];
const CenterProductDetail = () => {
  const [clicked, setClicked] = useState(colors[0]);
  return (
    <div className="body-prd-dt">
      <Link to="/">{clicked.price}</Link>
      <div className="prd-price">
        <div className="sub-price" style={{ background: `${clicked.color}` }}>
          <h1>{clicked.price}</h1>
        </div>
        <div className="sub-installment">
          <h1>Trả góp từ 6.158.000₫ / 1 tháng</h1>
        </div>
      </div>
      <div className="body-orther-phone">
        <p>
          <ColorLensRoundedIcon />
          Màu Sắc
        </p>
        {colors.map((color) => (
          <div
            key={color.id}
            className="sub-orther-phone"
            onClick={() => setClicked(color)}
          >
            <b>{color.name}</b>
            <p>{color.price}</p>
          </div>
        ))}
      </div>
      <div className="body-orther-phone">
        <p>Phiên bản khác</p>
        <div className="sub-orther-phone">
          <b>128gb</b>
          <p>30,890,000 ₫</p>
        </div>
        <div className="sub-orther-phone">
          <b>128gb</b>
          <p>30,890,000 ₫</p>
        </div>
        <div className="sub-orther-phone">
          <b>128gb</b>
          <p>30,890,000 ₫</p>
        </div>
        <div className="sub-orther-phone">
          <b>128gb</b>
          <p>30,890,000 ₫</p>
        </div>
      </div>
      <div className="voucher-prd-dt">
        <div className="sub-prd-dt">
          <div className="sub-header">
            <p>
              <RedeemRoundedIcon />
              Khuyến mãi
            </p>
          </div>
          <ul>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" className="btn-payment">
        <Link to="/payment">
          Mua Ngay<span>Nhận tại cửa hàng hoặc giao tận nhà</span>
        </Link>
      </button>
      <div className="installment-btn">
        <button type="button" className="btn-payment">
          <Link to="/">
            Trả góp<span>Xét duyệt online</span>
          </Link>
        </button>
        <button type="button" className="btn-payment">
          <Link to="/">
            Trả góp qua thẻ<span>Visa, MasterCard, JBL</span>
          </Link>
        </button>
      </div>
      <div className="voucher-prd-dt">
        <div className="sub-prd-dt">
          <div className="sub-header-other">
            <p>
              <RedeemRoundedIcon />
              Khuyến mãi khác
            </p>
          </div>
          <ul>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
            <li>
              <span>Giảm 5% tối đa 500.000đ qua Kredivo</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CenterProductDetail;
