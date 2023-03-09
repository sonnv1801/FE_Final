import Axios from 'axios';
const API = 'http://localhost:8000/v1/product';

export class ProductService {
  getAllProduct() {
    return Axios.get(API);
  }
  getProduct10days() {
    return Axios.get(`${API}/10days/prd`);
  }
  getDetail(id) {
    return Axios.get(`${API}/${id}`);
  }
  getProductType(type, limit) {
    return Axios.get(`${API}/products/${type}/${limit}`);
  }

  getProductTypeSamsung(limit) {
    return Axios.get(`${API}/products/Samsung/${limit}`);
  }

  getProductSimilar(id) {
    return Axios.get(`${API}/similar/${id}`);
  }
  getFilledPrice(type, filled) {
    return Axios.get(`${API}/price/${type}/${filled}`);
  }

  updateProduct(id, item) {
    return Axios.put(`${API}/${id}`, item);
  }

  deleteProduct(id, accessToken) {
    return Axios.delete(`${API}/${id}`, {
      headers: { token: `vanson ${accessToken}` },
    });
  }

  addProduct(item, accessToken) {
    return Axios.post(API, item, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
}
