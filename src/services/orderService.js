import Axios from 'axios';
const API = 'https://maizoshop.onrender.com/v1/order';

export class OrderService {
  create(item, accessToken) {
    return Axios.post(API, item, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
  getAllOrder() {
    return Axios.get(API);
  }

  getAllOrderToday() {
    return Axios.get(`${API}/today/1ngay`);
  }

  getOrderById(id) {
    return Axios.get(`${API}/${id}`);
  }

  deleteOrder(id, accessToken) {
    return Axios.delete(`${API}/${id}`, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
  confirmOrder(id, accessToken) {
    return Axios.put(`${API}/${id}`, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
}
