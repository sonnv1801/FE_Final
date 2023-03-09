import React, { useState } from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import CartNav from '../cartnav/CartNav';
import { useSelector } from 'react-redux';
export const NavDropDown = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('token'));

  const carts = JSON.parse(localStorage.getItem('carts'));

  const cart = useSelector((state) => state.defaultReducer.cart);

  return (
    <Box sx={{ flexGrow: 0 }} className="nav-dropdown-app">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/309709135_1493122074495093_6439269344169581464_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UtVInignv_IAX9hDO_U&tn=zKaTZRKwKrhhiTBr&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAYC6A8p3ktpUJ_dKMc0wHnZ9aJEfTnuf7k5vTlmSvyyA&oe=63FF92F3"
          />
        </IconButton>
      </Tooltip>
      <Menu
        className="menu-dropdown"
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu} className="sub-menu">
          {user ? (
            <div id="user-app">
              {user?.role ? (
                <div>
                  <li textalign="center" style={{ display: 'block' }}>
                    {`Xin chào: ${user?.fullname}`}
                  </li>
                  <li>
                    <Link to="/admin">Zô Admin nè</Link>
                  </li>
                  <li>
                    <Link to="/order">Lịch Sử Mua Hàng</Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li textalign="center" style={{ display: 'block' }}>
                    {`Xin chào: ${user?.fullname}`}
                  </li>
                  <li>
                    <Link to="/profile">Trang cá nhân</Link>
                  </li>
                  <li>
                    <Link to="/order">Lịch Sử Mua Hàng</Link>
                  </li>
                </div>
              )}
              <CartNav cart={cart} />

              <Button textalign="center" onClick={handlelogout}>
                Đăng Xuất
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/login" textalign="center">
                Đăng nhập
              </Link>
              <CartNav cart={cart} />
            </div>
          )}
        </MenuItem>
      </Menu>
    </Box>
  );
};
