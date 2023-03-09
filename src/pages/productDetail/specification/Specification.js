import React from 'react';
import './style.css';
const ts = [
  {
    id: 1,
    title: 'Bộ nhớ Trong',
    name: '128GB',
  },
  {
    id: 2,
    title: 'Bộ nhớ Trong',
    name: '128GB',
  },
  {
    id: 3,
    title: 'Bộ nhớ Trong',
    name: '128GB',
  },
  {
    id: 4,
    title: 'Bộ nhớ Trong',
    name: '128GB',
  },
];
const Specification = () => {
  return (
    <div className="specifications">
      <b>Thông số kỹ thuật</b>

      <div className="sub-specifications">
        {ts.map((item, index) => (
          <div className="sub-body-specifications" key={index}>
            <span>{item.title}</span>
            <h6>{item.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;
