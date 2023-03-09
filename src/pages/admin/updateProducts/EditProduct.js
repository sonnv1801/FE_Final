import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../../redux/actions/product.action';
import Swal from 'sweetalert2';
import './style.css';
const EditProduct = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    image: '',
    type: '',
    description: '',
    newPrice: '',
    oldPrice: '',
    quantity: '',
  });

  useEffect(() => {
    fetch(`https://maizoshop.onrender.com/v1/product/${path}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [colors, setColors] = useState([]);
  const [stores, setStores] = useState([]);
  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleColorChange = (index, value) => {
    // Tạo một bản sao của mảng colors
    const newColors = [...colors];
    // Cập nhật giá trị mới tại vị trí index
    newColors[index] = value;
    // Cập nhật lại mảng colors
    setColors(newColors);
  };

  const handleStoreChange = (index, value) => {
    // Tạo một bản sao của mảng colors
    const newStores = [...stores];
    // Cập nhật giá trị mới tại vị trí index
    newStores[index] = value;
    // Cập nhật lại mảng colors
    setStores(newStores);
  };
  const handleSubmit = async () => {
    try {
      if (
        data.title !== '' &&
        data.image !== '' &&
        data.type !== '' &&
        data.description !== '' &&
        data.newPrice !== '' &&
        data.oldPrice !== '' &&
        data.quantity !== '' &&
        colors.length === data.colors.length &&
        stores.length === data.stores.length
      ) {
        let formData = new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);
        formData.append('type', data.type);
        formData.append('description', data.description);
        formData.append('newPrice', data.newPrice);
        formData.append('oldPrice', data.oldPrice);
        formData.append('quantity', data.quantity);
        colors.forEach((color) => {
          formData.append('colors[]', color);
        });

        stores.forEach((store) => {
          formData.append('stores[]', store);
        });
        dispatch(updateProduct(path, formData, navigate));
      } else {
        Swal.fire('Nhập đầy đủ', 'warning');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-add-product">
      <h2>Chỉnh sửa sản phẩm nè!</h2>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <span>Tên Sản Phẩm</span>
            <input
              className="form-control"
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange('title')}
            />
          </div>
          <div className="mb-3">
            <span>Tất cả màu Sản Phẩm</span>
            <div className="row">
              {data.colors?.map((item, index) => (
                <div className="col-6" key={index}>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder={item}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <span>Tất cả bộ nhớ Sản Phẩm</span>
            <div className="row">
              {data.stores?.map((item, index) => (
                <div className="col-6" key={index}>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder={item}
                    onChange={(e) => handleStoreChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <span>Mô tả Sản Phẩm</span>
            <textarea
              className="form-control"
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange('description')}
            />
          </div>
          <div className="mb-3">
            <span>Giá Mới</span>
            <input
              className="form-control"
              type="number"
              name="newPrice"
              value={data.newPrice}
              onChange={handleChange('newPrice')}
            />
          </div>
          <div className="mb-3">
            <span>Giá cũ</span>
            <input
              className="form-control"
              type="number"
              name="oldPrice"
              value={data.oldPrice}
              onChange={handleChange('oldPrice')}
            />
          </div>
          <div className="mb-3">
            <span>Hình Ảnh</span>
            <input
              className="form-control"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange('image')}
            />
          </div>
          <div className="mb-3">
            <span>Số lượng sản phẩm</span>
            <select onChange={handleChange('quantity')}>
              <option value={data.quantity}>{data.quantity}</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="mb-3">
            <span>Loại Sản Phẩm</span>
            <select onChange={handleChange('type')}>
              <option value={data.type}>{data.type}</option>
              <option value="Iphone">Iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Ipad">Ipad</option>
            </select>
          </div>
          <div className="text">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update
            </button>
            <Link to={'/admin/product'}>
              <button className="btn btn-success">Thoát!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
