import React from 'react';
import { Link } from 'react-router-dom';

const FooterSupport = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 support-sw">
      <h5 className=" text-center">Hỗ trợ</h5>
      <ul className="list-unstyled text-center">
        <li className="text-center">
          <Link to="/" className="text-dark">
            <b>Tổng đài hỗ trợ</b>
            <br />
            <span>(Từ 8:00-21:00)</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/" className="text-dark">
            Hotline bán hàng: 0375521434 | 1900.633.471
          </Link>
        </li>
        <li>
          <Link to="/" className="text-dark">
            Hotline bán hàng: 0375521434 | 1900.633.471
          </Link>
        </li>
        <li>
          <Link to="/" className="text-dark">
            Hotline bán hàng: 0375521434 | 1900.633.471
          </Link>
        </li> */}
        <li>
          <div className="support-footer">
            <Link to="/">
              <strong>Hotline phản ánh chất lượng dịch vụ:</strong>
              <br />
              <p>0869176474</p>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterSupport;
