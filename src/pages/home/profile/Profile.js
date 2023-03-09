import React from 'react';
import './style.css';
import Menu from './menu/Menu';
import InforUser from './inforuser/InforUser';
function Profile() {
  return (
    <>
      <div className="profile_container">
        <div className="user-container-profile">
          <div className="left-container">
            <Menu />
          </div>
          <div className="right-container">
            <InforUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
