import React, { useState } from 'react';
import './style.css';

const imgs = [
  {
    id: 1,
    url: 'https://clickbuy.com.vn/uploads/2022/10/avt-iphone-14-pro-vang.png',
  },
  {
    id: 2,
    url: 'https://clickbuy.com.vn/uploads/2022/10/avt-iphone-14-pro-trang.png',
  },
  {
    id: 3,
    url: 'https://clickbuy.com.vn/uploads/2022/10/avt-iphone-14-pro-tim.png',
  },
  {
    id: 4,
    url: 'https://clickbuy.com.vn/uploads/2022/10/avt-iphone-14-pro-den.png',
  },
];

const LeftProductDetail = (leftProduct) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="header-prd-dt">
      <div className="image-prd">
        <img src={leftProduct.leftProduct?.image} alt="Iphone" />
        <div className="sub-image-prd">
          {imgs.map((img) => (
            <img src={img.url} alt="Iphone" onClick={() => setMainImage(img)} />
          ))}
        </div>
      </div>
      <div className="banner-prd-dt">
        <img
          src="https://cdn.tgdd.vn/2021/06/banner/sticky-gop-390-97-390x97.png"
          alt="Iphone"
        />
      </div>
    </div>
  );
};

export default LeftProductDetail;
