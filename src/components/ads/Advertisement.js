import React from 'react';
import Carousel from '../carousel/Carousel';
import './style.css';
function Advertisement() {
  return (
    <div>
      <div className="ads-page">
        <div className="left-ads">
          <Carousel />
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2020/03/danmh-952x500-min.png"
            alt="..."
          ></img>
          <img
            src="https://clickbuy.com.vn/uploads/media/610-Xfllb.png"
            alt="..."
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
