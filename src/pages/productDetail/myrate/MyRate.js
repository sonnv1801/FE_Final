import React from 'react';
import './style.css';
import Swal from 'sweetalert2';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCmt } from '../../../../redux/actions/comment.action';
const MyRate = ({ productDetail, fliterCMT }) => {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setCmt] = useState(null);
  const [error, setError] = useState(null);
  const customer = JSON.parse(localStorage.getItem('token'));
  const [data, setData] = useState({
    comment: '',
  });

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleCMT = async (e) => {
    e.preventDefault();
    try {
      if (data.comment === '' && number.lenght === 0) {
        Swal.fire('Nhập Đầy Đủ Thông Tin?', 'error');
      } else {
        const customer = JSON.parse(localStorage.getItem('token')) || [];
        const cmt = {
          customer: {
            customerId: customer?._id,
            fullname: customer?.fullname,
            email: customer?.email,
            comment: data?.comment,
            rate: number,
          },
          id_product: productDetail.productDetail.productDetail?._id,
        };
        const response = dispatch(createCmt(cmt, customer?.accessToken));
        // console.log(response);
        setCmt(response.customer);
        console.log(response);
      }

      // navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return 'Đánh giá';
      case 1:
        return 'Không hài lòng';
      case 2:
        return 'Tệ';
      case 3:
        return 'Bình thường';
      case 4:
        return 'Tốt';
      case 5:
        return 'Rất tốt';
      default:
        return 'Đánh giá';
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return 'Bình luận ở đây...';
      case 1:
      case 2:
      case 3:
      case 4:
        return 'Bạn đang gặp vấn đề gì';
      case 5:
        return 'Tại sao bạn thích sản phẩm của chúng tôi';
      default:
        return 'Bình luận ở đây...';
    }
  };
  return (
    <div className="my-rate">
      <b>Đánh giá của bạn</b>
      <form>
        <p className="text-rate">{handleText()}</p>
        <p className="star-rate">
          {Array(5)
            .fill()
            .map((_, index) =>
              number >= index + 1 || hoverStar >= index + 1 ? (
                <AiFillStar
                  onMouseOver={() => !number && setHoverStar(index + 1)}
                  onMouseLeave={() => setHoverStar(undefined)}
                  style={{ color: 'orange' }}
                  onClick={() => setNumber(index + 1)}
                />
              ) : (
                <AiOutlineStar
                  onMouseOver={() => !number && setHoverStar(index + 1)}
                  onMouseLeave={() => setHoverStar(undefined)}
                  style={{ color: 'orange' }}
                  onClick={() => setNumber(index + 1)}
                />
              )
            )}
        </p>

        <b>Nhận xét của bạn*</b>
        <textarea
          className="my-text-rate"
          placeholder={handlePlaceHolder()}
          onChange={handleChange('comment')}
        ></textarea>
        <b>Tên*</b>
        <input
          type="text"
          className="my-text-rate"
          value={customer?.fullname}
          disabled
          placeholder="Nhập tên của bạn..."
        />
        <b>Email*</b>
        <input
          type="email"
          className="my-text-rate"
          value={customer?.email}
          disabled
          placeholder="Nhập email của bạn ..."
        />
        {customer !== null ? (
          <button className="btn-rate" onClick={handleCMT}>
            Gửi đi
          </button>
        ) : (
          <p>
            Đăng Nhập Để Tiếp Tục Đánh Giá
            <Link to="/login" style={{ marginLeft: '1rem' }}>
              <button className="btn-rate">Đăng Nhập</button>
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default MyRate;
