import React from 'react';
import './style.css';
const colors = [
  {
    color: '#17a2b8',
    more: '#1591a5',
  },
  {
    color: '#28a745',
    more: '#24963e',
  },
  {
    color: '#ffc107',
    more: '#e5ad06',
  },
  {
    color: '#DC3545',
    more: '#C6303E',
  },
];
function Dashboard() {
  return (
    <div className="container-dashboard">
      <div className="title-dashboard"> Thống Kê</div>
      <div className="group-detail-board">
        <div className="detail-board">
          <ul>
            {colors.map((item) => (
              <>
                <div style={{ marginLeft: '1rem' }}>
                  <div
                    className="detail-info"
                    style={{ background: `${item.color}` }}
                  >
                    <div className="left-info">
                      <h3>150</h3>
                      <p>New Oders</p>
                    </div>
                    <i className="bx bx-shopping-bag"></i>
                  </div>
                  <div>
                    <a href="#!">
                      <li style={{ background: `${item.more}` }}>
                        More infor <i className="bx bxs-right-arrow-circle"></i>
                      </li>
                    </a>
                  </div>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
