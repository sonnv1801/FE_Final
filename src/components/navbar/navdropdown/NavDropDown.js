import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
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

  const cart = useSelector((state) => state.defaultReducer.cart);
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 100);
  }
  return (
    <Box sx={{ flexGrow: 0 }} className="nav-dropdown-app">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user?.image} />
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
                    <Link onClick={refreshPage} to="/admin">
                      Zô Admin nè
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">Trang cá nhân</Link>
                  </li>
                  <li>
                    <Link to="/order" onClick={refreshPage}>
                      Lịch Sử Mua Hàng
                    </Link>
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

              <Button textalign="center" onClick={handlelogout}>
                Đăng Xuất
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/login" textalign="center">
                Đăng nhập
              </Link>
            </div>
          )}
        </MenuItem>
      </Menu>
    </Box>
  );
};
