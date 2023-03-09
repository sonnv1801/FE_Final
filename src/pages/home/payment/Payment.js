import './style.css';
import React from 'react';

import { CartPayment } from './cartpayment/CartPayment';
import { HeaderPayment } from '../../../components/headerpayment/HeaderPayment';

export const Payment = () => {
  return (
    <>
      <p className="title-payment">Đơn hàng của bạn</p>
      <div className="payment-container">
        <HeaderPayment />
        <div className="body-payment">
          <CartPayment />
        </div>
      </div>
    </>
  );
};
