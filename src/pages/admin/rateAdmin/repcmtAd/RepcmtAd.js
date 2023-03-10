import React from 'react';
import './style.css';
import logo from '../../../../assets/logo.png';
import moment from 'moment';
function RepcmtAd(fliterCMT) {
  console.log('fliterCMT', fliterCMT.fliterCMT);
  return (
    <div className="box-cmt">
      {/* {fliterCMT.fliterCMT?.map((item, index) => ( */}
      <div className="card-cmt">
        <div className="card-cmt-body">
          <div className="head-card-cmt">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src={logo}
              alt="avatar"
            />
            <h6 className="fw-bold text-primary">MaizoShop</h6>
            <p className="text-muted small mb-0">
              {/* {moment(item.createdAt).format('DD/MM/YYYY')} */}
            </p>
          </div>
          <div className="rep-cmt-ad">
            Cảm ơn quý khách đã quan tâm đến sản phẩm của chúng tôi. Chúng tôi
            sẽ phản hồi lại trong giây lát. Nếu quý khách muốn được tư vấn trực
            tiếp, vui lòng liên hệ với đường dây nóng của chúng tôi ở bên dưới.
            Xin cảm ơn!
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default RepcmtAd;
