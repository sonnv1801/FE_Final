import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../../redux/actions/user.action';
import './style.css';
function InforUser() {
  const user = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleProfile = (e) => {
    e.preventDefault();
    const newUser = {
      fullname: fullname,
      phone: phone,
      address: address,
    };
    dispatch(updateUser(user._id, newUser, user?.accessToken));
    localStorage.removeItem('token');
    navigate('/login');
  };

  // const [profile, setProfile] = useState({
  //   _id: user?._id,
  //   fullname: '',
  //   phone: '',
  //   address: '',
  // });

  // console.log('user nè', profile);

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setProfile({
  //     ...profile,
  //     [name]: value,
  //   });
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (
  //     values._id !== '' &&
  //     values.fullname !== '' &&
  //     values.phone !== '' &&
  //     values.address !== ''
  //   ) {
  //     dispatch(updateUser(values._id, values));
  //   } else {
  //     alert("Value isn't null");
  //   }
  // };
  return (
    <div className="info-container">
      <div className="title-infor">Thông tin khách hàng</div>
      <form className="group-container" onSubmit={handleProfile}>
        <div className="form-group">
          <label>Họ và Tên</label>
          <input
            type="text"
            placeholder={user.fullname}
            onChange={(e) => setFullname(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="email"
            placeholder={user.email}
            value={user.email}
            required=""
            disabled
          ></input>
        </div>
        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="text"
            name="phone"
            className="phone"
            placeholder={user.phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            className="address"
            placeholder={user.address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div className="form-group-foot">
          <button>Cập nhật</button>
        </div>
      </form>
    </div>
  );
}

export default InforUser;
