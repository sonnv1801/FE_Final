import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MiniCard = () => {
  return (
    <div className="mini-card">
      <Link to="/">
        <img
          src="https://clickbuy.com.vn/assets/home/iconphukien-01.png"
          alt="img-mini-card"
        />
      </Link>
    </div>
  );
};

export default MiniCard;
