import React from 'react';
import './style.css';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
const RightProductDetail = () => {
  return (
    <div className="right-prd-dt">
      {/* <div className="select-area">
        <select>
          <option>Miền Nam</option>
          <option>Miền Bắc</option>
        </select>
      </div> */}
      <div className="address-area">
        <ul>
          <li>
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
          </li>
          <li>
            <PinDropRoundedIcon />
            Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
          </li>
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
      <div className="advise-area">
        <div className="sub-advise">
          <HeadsetMicIcon />
          <b>Đăng ký để được tư vấn</b>
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tư vấn qua số điện thoại"
                aria-label="Tư vấn qua số điện thoại"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-succes"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </form>
        </div>
        <ul>
          <li>
            Gọi 1900.63.39.09 hoặc 0977.649.939 để được tư vấn (Từ 8:00-21:00)
          </li>
          <li>
            Gọi 1900.63.39.09 hoặc 0977.649.939 để được tư vấn (Từ 8:00-21:00)
          </li>
          <li>
            Gọi 1900.63.39.09 hoặc 0977.649.939 để được tư vấn (Từ 8:00-21:00)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightProductDetail;
