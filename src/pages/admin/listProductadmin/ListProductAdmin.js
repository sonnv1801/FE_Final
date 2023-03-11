import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Form from 'react-bootstrap/Form';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  getProduct,
} from '../../../redux/actions/product.action';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebaradmin/Sidebar';
import { getAllTypeProduct } from '../../../redux/actions/typeProduct.action';
function ListProductAdmin() {
  const [showadd, setShowadd] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const listTypeAdmin = useSelector((state) => state.defaultReducer.listType);

  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const [data, setData] = useState({
    title: '',
    image: '',
    type: '',
    description: '',
    newPrice: '',
    oldPrice: '',
    quantity: '',
  });

  const [newColor, setNewColor] = useState('');
  const [newStore, setNewStore] = useState('');
  const [colors, setColors] = useState([]);
  const [stores, setStores] = useState([]);

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleRemoveColor = (colorToRemove) => {
    const updatedColors = colors.filter((color) => color !== colorToRemove);
    setColors(updatedColors);
  };

  const handleAddColor = () => {
    setColors([...colors, newColor]);
    setNewColor('');
  };

  const handleRemoveStore = (colorToRemove) => {
    const updatedStores = stores.filter((store) => store !== colorToRemove);
    setStores(updatedStores);
  };

  const handleAddStore = () => {
    setStores([...stores, newStore]);
    setNewStore('');
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
        colors.length !== 0 &&
        stores.length !== 0
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
          console.log(store);
        });

        dispatch(addProduct(formData, currentUser?.accessToken));
        setShowadd(false);
      } else {
        Swal.fire('Nhập đầy đủ', 'warning');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseAdd = () => {
    setShowadd(false);
  };

  const listProductAdmin = useSelector(
    (state) => state.defaultReducer.listProduct
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);

  console.log(listProductAdmin.length);

  return (
    <div className="container-listproductAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-5">
                <p>Quản lý Sản phẩm</p>
              </div>
              <div className="col-sm-7">
                <button
                  href="#"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    setShowadd(true);
                  }}
                >
                  <i className="bx bxs-folder-plus"></i>
                  <span>Add Products</span>
                </button>
              </div>
            </div>
          </div>
          <table className="table">
            <thead classNane="table-dark">
              <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên Sản phẩm</th>
                <th>Mặt hàng</th>
                <th>Giá</th>
                <th>Sửa</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ margin: '0 auto' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  {listProductAdmin.map((item, index) => (
                    <tr>
                      <td>{index}</td>
                      <td>
                        <img src={item.image} alt={item.title} />
                      </td>
                      <td>{item.title}</td>

                      <td>{item.type}</td>
                      <td>
                        <p>{`${item.newPrice.toLocaleString()}đ`}</p>
                      </td>
                      <td>
                        <Link to={`/admin/${item._id}`}>
                          <button className="btn btn-success">
                            <i className="bx bxs-edit-alt" style={{}}></i>
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch(
                              deleteProduct(item._id, currentUser?.accessToken)
                            );
                          }}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showadd} onHide={handleCloseAdd} className="modal">
        <ModalHeader>
          <ModalTitle>Thêm sản phẩm</ModalTitle>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Form.Group className="formgroup-body">
            <Form.Label>Tên sản phẩm: </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange('title')}
              placeholder="Nhập tên sản phẩm..."
            />
            <Form.Label>Loại sản phẩm: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange('type')}
            >
              <option selected>Chọn loại sản phẩm</option>

              {listTypeAdmin?.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
              {/* <option>Chọn loại sản phẩm</option>
              <option value="Iphone">Iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Ipad">Ipad</option> */}
            </Form.Select>
            <Form.Label>Mô tả sản phẩm: </Form.Label>
            <textarea
              className="form-control"
              type="text"
              onChange={handleChange('description')}
            />
            <Form.Label>Giá mới: </Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange('newPrice')}
              placeholder="Nhập giá sản phẩm..."
            />
            <Form.Label>Giá cũ: </Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange('oldPrice')}
              placeholder="Nhập giá cũ sản phẩm..."
            />
            <Form.Label>Số lượng sản phẩm: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange('quantity')}
            >
              <option>Chọn số lượng sản phẩm</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </Form.Select>
          </Form.Group>
          <Form.Label>Hình ảnh: </Form.Label>
          <Form.Control
            type="file"
            size="sm"
            accept="image/*"
            name="image"
            onChange={handleChange('image')}
          />

          <Form.Label>Tên màu sản phẩm: </Form.Label>
          <ul
            style={{
              border: '1px dotted gray',
              padding: '2rem',
              marginTop: '2rem',
              borderRadius: '1rem',
              paddingTop: '10px',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            <b>Tất Cả Màu</b>
            {colors.map((color) => (
              <>
                <div className="row">
                  <div className="col-6">
                    <p> {color}</p>
                    <hr />
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(color)}
                    >
                      <CloseIcon color="success" />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </ul>
          <Form.Control
            type="text"
            onChange={(e) => setNewColor(e.target.value)}
            placeholder="Nhập màu sản phẩm... vd:(Red, Blue, Gray,...)"
            value={newColor}
          />
          <Button
            variant="success"
            onClick={handleAddColor}
            style={{ margin: '1rem', float: 'right' }}
          >
            Thêm Màu
          </Button>

          <Form.Label>Tên bộ nhớ sản phẩm: </Form.Label>
          <ul
            style={{
              border: '1px dotted gray',
              padding: '2rem',
              marginTop: '2rem',
              borderRadius: '1rem',
              paddingTop: '10px',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            <b>Tất Cả Bộ Nhớ</b>
            {stores.map((store) => (
              <>
                <div className="row">
                  <div className="col-6">
                    <p> {store}</p>
                    <hr />
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={() => handleRemoveStore(store)}
                    >
                      <CloseIcon color="success" />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </ul>
          <Form.Control
            type="text"
            onChange={(e) => setNewStore(e.target.value)}
            placeholder="Nhập bộ nhớ sản phẩm... vd:(16GB, 32GB, 64GB,...)"
            value={newStore}
            required
          />
          <Button
            variant="success"
            onClick={handleAddStore}
            style={{ margin: '1rem', float: 'right' }}
          >
            Thêm bộ nhớ
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button variant="success" onClick={handleSubmit}>
            Thêm Sản Phẩm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListProductAdmin;
