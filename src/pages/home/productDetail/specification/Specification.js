import React from 'react';
import './style.css';

const Specification = () => {
  return (
    <div className="specifications">
      <b>Thông số kỹ thuật</b>
      <table className="table table-hover">
        <tbody>
          <tr>
            <td>Màu sắc</td>
            <td>ABC</td>
          </tr>
          <tr>
            <td>Màn hình</td>
            <td>IPS LCD6.1"Liquid Retina</td>
          </tr>
          <tr>
            <td>Hệ điều hành</td>
            <td>iOS 15</td>
          </tr>
          <tr>
            <td>Camera sau</td>
            <td>2 camera 12 MP</td>
          </tr>
          <tr>
            <td>Camera trước</td>
            <td> 12 MP</td>
          </tr>
          <tr>
            <td>Chip</td>
            <td>Apple A13 Bionic</td>
          </tr>

          <tr>
            <td>RAM</td>
            <td>4 GB</td>
          </tr>
          <tr>
            <td>Dung lượng lưu trữ</td>
            <td>128 GB</td>
          </tr>
          <tr>
            <td>SIM</td>
            <td>1 Nano SIM & 1 eSIMHỗ trợ 4G</td>
          </tr>
          <tr>
            <td>Pin, Sạc</td>
            <td>3110mAh 18W</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specification;
