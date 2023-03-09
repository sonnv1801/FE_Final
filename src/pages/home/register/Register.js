import React from 'react';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
function Register() {
  const messerr = useSelector((state) => state.defaultReducer.register.error);
  if (messerr === true) {
    console.log('Sao la v con?');
  } else {
    console.log('O tuyet voi');
  }
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      phone: phone,
      address: address,
    };
    registerUser(newUser, dispatch, navigate);
  };
  const handleShow = () => {
    const x = document.getElementById('form-password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };
  const handleShowinform = () => {
    const x = document.getElementById('confirm-password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  return (
    <>
      <div className="register-page">
        <form className="register" action="#" onSubmit={handleRegister}>
          <div className="title">Đăng ký nha!</div>

          <div className="row">
            <div className="col-6">
              <p className="title-input">Họ và tên</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập họ và tên"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              <p className="title-input">Tên đăng nhập</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập...."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              <p className="title-input">Mật khẩu</p>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu...."
                  id="form-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-eye" onClick={handleShow}></i>
                </span>
              </div>
              <p className="title-input">Nhập lại mật khẩu</p>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Nhập lại nhé!"
                  id="confirm-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-eye" onClick={handleShowinform}></i>
                </span>
              </div>
            </div>
            <div className="col-6">
              <p className="title-input">Email</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập email....."
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <p className="title-input">Số điện thoại</p>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Nhập số điện thoại...."
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <p className="title-input">Địa chỉ</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập địa chỉ..."
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-danger">
            XONG
          </button>
          <span className="totstify-register">
            {messerr === false ? `` : `Xin hãy nhập đầy đủ thông tin!`}
          </span>
        </form>
      </div>
    </>
  );
}

export default Register;
