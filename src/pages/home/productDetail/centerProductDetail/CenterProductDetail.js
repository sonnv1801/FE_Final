import React, { useState } from 'react';
import './style.css';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import numeral from 'numeral';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { addCart } from '../../../../redux/actions/product.action';
import { useDispatch } from 'react-redux';

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
const CenterProductDetail = (ceterProduct) => {
  const [clicked, setClicked] = useState(colors[0]);
  const oldPrice = ceterProduct.ceterProduct?.oldPrice;
  const newPrice = ceterProduct.ceterProduct?.newPrice;
  const color = ceterProduct.ceterProduct?.colors;
  const store = ceterProduct.ceterProduct?.stores;

  console.log(ceterProduct.ceterProduct);

  const [selectColor, setSelectColor] = useState('');
  const [selectStore, setSelectStore] = useState('');
  const handleAddCart = (e) => {
    const newCart = {
      id: ceterProduct.ceterProduct?._id,
      title: ceterProduct.ceterProduct?.title,
      image: ceterProduct.ceterProduct?.image,
      newPrice: ceterProduct.ceterProduct?.newPrice,
      quantity_cart: 1,
    };
    e.preventDefault();
    if (selectColor && selectStore) {
      dispatch(addCart(newCart, selectColor, selectStore));
    } else {
      Swal.fire('Nhập đầy đủ', 'warning');
    }
  };

  const formattedOldPrice = numeral(oldPrice).format('0,0');
  const formattedNewPrice = numeral(newPrice).format('0,0');
  const dispatch = useDispatch();
  return (
    <div className="body-prd-dt">
      <del className="old-price">{`${formattedOldPrice}đ`}</del>
      <div className="prd-price">
        <div className="sub-installment">
          <h1>Trả góp từ 6.158.000₫ / 1 tháng</h1>
        </div>
        <div className="sub-price" style={{ background: `${clicked.color}` }}>
          <h1>{`${formattedNewPrice}đ`}</h1>
        </div>
      </div>
      <div className="body-orther-phone">
        <p>
          <ColorLensRoundedIcon />
          Màu Sắc
        </p>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setSelectColor(e.target.value)}
        >
          <option>Chọn màu</option>
          {color?.map((color, index) => (
            <option value={color} key={index}>
              {color}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className="body-orther-phone">
        <p>Phiên bản khác</p>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setSelectStore(e.target.value)}
        >
          <option>Chọn bộ nhớ</option>
          {store?.map((store, index) => (
            <option value={store} key={index}>
              {store}
            </option>
          ))}
        </Form.Select>
      </div>
      <button type="button" className="btn-payment">
        <a href="#!" onClick={handleAddCart}>
          Mua Ngay<span>Nhận tại cửa hàng hoặc giao tận nhà</span>
        </a>
      </button>
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
    </div>
  );
};

export default CenterProductDetail;
