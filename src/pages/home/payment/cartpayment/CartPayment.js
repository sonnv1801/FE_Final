import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './style.css';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../../redux/actions/order.action';
import numeral from 'numeral';

export const CartPayment = () => {
  const carts = JSON.parse(localStorage.getItem('carts'));
  const user = JSON.parse(localStorage.getItem('token'));
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const renderAmount = () => {
    return carts?.reduce((total, item) => {
      return (total += item.newPrice * item.quantity_cart);
    }, 0);
  };

  const [ship, setShip] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  function handleRadioChange(event) {
    setShip(event.target.value);
  }

  function handleCheckboxChange(event) {
    setTermsChecked(event.target.checked);
  }

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    address: '',
    notes: '',
    checked: null,
  });

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleCheckout = async () => {
    try {
      if (
        data.fullname !== '' &&
        data.phone !== '' &&
        data.address !== '' &&
        ship !== '' &&
        termsChecked !== false
      ) {
        const cartItems = JSON.parse(localStorage.getItem('carts')) || [];
        const customer = JSON.parse(localStorage.getItem('token')) || [];
        const order = {
          customer: {
            customerId: customer?._id,
            fullname: data?.fullname,
            phone: data?.phone,
            email: customer?.email,
            address: data?.address,
            notes: data?.notes,
          },
          products: cartItems?.map((item) => ({
            productId: item?.id,
            title: item?.title,
            newPrice: item?.newPrice,
            color: item?.color,
            store: item?.store,
            quantity: item?.quantity_cart,
          })),
          total: cartItems?.reduce(
            (total, item) => total + item.newPrice * item?.quantity_cart,
            0
          ),
        };
        const response = dispatch(
          createOrder(order, customer?.accessToken, navigate)
        );
        localStorage.removeItem('carts');
        // console.log(response);
        setOrder(response.customer);
      } else {
        Swal.fire('Nhập Đầy Đủ Thông Tin?', 'error');
      }

      // navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div className="body-left-payment">
        <div className="body-payment">
          <div className="infomation-users">
            <Form.Group className="formgroup-body">
              <Form.Label>Email: </Form.Label>
              <Form.Control disabled type="address" value={user.email} />
              <Form.Label>Họ và tên:* </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={handleChange('fullname')}
                // value={user.fullname}
              />
              <Form.Label>Số điện thoại:* </Form.Label>
              <Form.Control
                type="number"
                required
                onChange={handleChange('phone')}
                // value={user.phone}
              />

              <Form.Label>Address:* </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={handleChange('address')}
              />
              <Form.Label>Ghi Chú: </Form.Label>
              <Form.Control type="text" onChange={handleChange('notes')} />
            </Form.Group>
          </div>
          <div className="infomation-product">
            <b>HOÁ ĐƠN</b>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Tạm tính</th>
                </tr>
              </thead>
              {carts?.map((item, index) => (
                <tbody>
                  <tr key={index}>
                    <td>
                      {item?.title}
                      <span className="quantity-prd-payment">{` X${item?.quantity_cart}`}</span>
                    </td>
                    <td>{`${numeral(item?.newPrice).format('0,0')}đ`}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="total-payment">
              <span>Giao hàng</span>
              <span>Express</span>
            </div>
            <div className="total-payment">
              <span>Tổng:</span>
              <span>{`${numeral(renderAmount()).format('0,0')}đ`}</span>
            </div>
            <span className="term">
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={handleCheckboxChange}
              />
              Tôi đồng ý điều khoản của website
            </span>
            {/* <span className="term">
              <input type="radio" name="ship" />
              Chuyển khoản ngân hàng
            </span> */}
            <span className="term">
              <input
                type="radio"
                name="ship"
                checked={ship === 'ship'}
                value="ship"
                onChange={handleRadioChange}
              />
              Trả tiền mặt khi giao hàng
            </span>
            <button className="order-payment" onClick={handleCheckout}>
              {/* <Link to="/order">Đặt hàng</Link> */}
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
