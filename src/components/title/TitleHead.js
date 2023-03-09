import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function TitleHead(props) {
  return (
    <div className="container-content">
      <h1>Sản Phẩm</h1>
      <div className="sub-content">
        <ul>
          {props.typeProduct.map((item, index) => (
            <Link to={`/shop/${item.name}`} key={index}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TitleHead;
