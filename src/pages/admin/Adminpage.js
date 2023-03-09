import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import ListOderAdmin from '../admin/listOderAdmin/ListOderAdmin';
import ListTypeAdmin from '../admin/listTypeAdmin/ListTypeAdmin';
import ListUser from '../admin/listuser/ListUser';
import Sidebar from '../admin/sidebaradmin/Sidebar';
import ListProductAdmin from './listProductadmin/ListProductAdmin';
import './style.css';
function Adminpage() {
  return (
    <>
      <div className="container-admin">
        <div className="left-container-admin">
          <Sidebar />
        </div>
        <div className="right-container-admin">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Adminpage;
