import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/actions/user.action';
import Swal from 'sweetalert2';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const messerr = useSelector((state) => state.defaultReducer.login.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(messerr);
  const handleLogin = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      const newUser = {
        username: username,
        password: password,
      };
      loginUser(newUser, dispatch, navigate);
    } else {
      Swal.fire('Vui lòng nhập đầy đủ Username và mật khẩu', 'waring');
    }
  };
  const handleShow = () => {
    const x = document.getElementById('form-password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  return (
    <>
      <div className="main">
        <form className="login" action="#" id="form-1" onSubmit={handleLogin}>
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            {messerr === false
              ? ``
              : `Vui Lòng kiểm tra lại Username Và Mật khẩu!`}
          </p>

          <div className="title">Wellcome!</div>
          <p className="title-input">Tên đăng nhập</p>
          <div className="input-group mb-3">
            <input
              type="text"
              for="fullname"
              className="form-control"
              placeholder="Nhập vào nè!"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <span className='form-mess'>alo</span> */}
          </div>

          <p className="title-input">Mật khẩu</p>
          <div className="input-group mb-3">
            <input
              type="password"
              for="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              placeholder="Nhập mật khẩu bạn ơi!"
              id="form-password"
            />
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-eye" onClick={handleShow}></i>
            </span>
            {/* <span className='form-mess'>alo</span> */}
          </div>
          <button type="submit" className="btn btn-danger">
            ĐĂNG NHẬP
          </button>
          <Link to={'/register'}>
            <button type="button" className="btn btn-danger">
              ĐĂNG KÝ
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
