import Axios from 'axios';
const API = 'https://maizoshop.onrender.com/v1/comment';

export class CommentProduct {
  getCmt(item) {
    return Axios.get(API, item);
  }
  getCmtById(id) {
    return Axios.get(`${API}/${id}`);
  }
  createCmt(item, accessToken) {
    return Axios.post(API, item, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
  deleteCmt(id, accessToken) {
    return Axios.delete(`${API}/${id}`, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
  confirmCMT(id, accessToken) {
    return Axios.put(`${API}/${id}`, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
}
