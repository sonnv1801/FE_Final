import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './style.css';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../../redux/actions/order.action';

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
        Swal.fire('Nh????p ??????y ??u?? Th??ng Tin?', 'error');
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
              <Form.Label>H??? v?? t??n:* </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={handleChange('fullname')}
                // value={user.fullname}
              />
              <Form.Label>S??? ??i???n tho???i:* </Form.Label>
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
              <Form.Label>Ghi Ch??: </Form.Label>
              <Form.Control type="text" onChange={handleChange('notes')} />
            </Form.Group>
          </div>
          <div className="infomation-product">
            <b>HO?? ????N</b>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S???n ph???m</th>
                  <th scope="col">T???m t??nh</th>
                </tr>
              </thead>
              {carts?.map((item, index) => (
                <tbody>
                  <tr key={index}>
                    <td>
                      {item?.title}
                      <span className="quantity-prd-payment">{` X${item?.quantity_cart}`}</span>
                    </td>
                    <td>{`${item?.newPrice?.toLocaleString()}??`}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="total-payment">
              <span>Giao h??ng</span>
              <span>Express</span>
            </div>
            <div className="total-payment">
              <span>T????ng:</span>
              <span> {`${renderAmount()?.toLocaleString()}??`}</span>
            </div>
            <span className="term">
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={handleCheckboxChange}
              />
              T??i ?????ng ?? ??i???u kho???n c???a website
            </span>
            {/* <span className="term">
              <input type="radio" name="ship" />
              Chuy???n kho???n ng??n h??ng
            </span> */}
            <span className="term">
              <input
                type="radio"
                name="ship"
                checked={ship === 'ship'}
                value="ship"
                onChange={handleRadioChange}
              />
              Tr??? ti???n m???t khi giao h??ng
            </span>
            <button className="order-payment" onClick={handleCheckout}>
              {/* <Link to="/order">?????t h??ng</Link> */}
              ?????t h??ng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
