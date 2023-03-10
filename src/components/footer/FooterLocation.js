import React from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const FooterLocation = () => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 mb-md-0 location-footer">
      <h5 className=" text-center">Khu vực</h5>
      <div>
        <div className="tab-content tabs-scroll" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <p>
              <LocalOfferIcon className="icon-location" />
              Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
            </p>
            <p>
              <LocalOfferIcon className="icon-location" />
              Nghĩa Hành, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <p>
              <LocalOfferIcon className="icon-location" />
              Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
            </p>
            <p>
              <LocalOfferIcon className="icon-location" />
              Nghĩa Hành, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <p>
              <LocalOfferIcon className="icon-location" />
              Nghĩa Trung, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
            </p>
            <p>
              <LocalOfferIcon className="icon-location" />
              Nghĩa Hành, Tư Nghĩa, Quảng Ngãi: 0375521434 | 0869176474
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLocation;
