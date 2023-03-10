import React from 'react';
import './style.css';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import { Link } from 'react-router-dom';
const RightProductDetail = () => {
  return (
    <div className="right-prd-dt">
      <div className="address-area">
        <ul>
          <li>
            <PinDropRoundedIcon />
            Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
          </li>
          {/* <li>
            <PinDropRoundedIcon />
            Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
          </li>
          <li>
            <PinDropRoundedIcon />
            Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
          </li>
          <li>
            <PinDropRoundedIcon />
            Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
          </li> */}
        </ul>
      </div>
      <div className="offer-area">
        <div className="offer-title">
          <span>Ưu đãi trả góp</span>
        </div>
        <ul>
          <li>
            Hỗ trợ trả góp các ngân hàng trả góp HD SaiSon, MB MCredit, Fe
            Credit
          </li>
          <li>
            Hỗ trợ trả góp các ngân hàng trả góp HD SaiSon, MB MCredit, Fe
            Credit
          </li>
          <li>
            Hỗ trợ trả góp các ngân hàng trả góp HD SaiSon, MB MCredit, Fe
            Credit
          </li>
        </ul>
      </div>
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
      <div className="banner-prd-dt">
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2020/11/127468139_655624531742632_4058878825504183841_n.jpg"
          alt="Iphone"
        />
      </div>
    </div>
  );
};

export default RightProductDetail;
