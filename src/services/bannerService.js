import Axios from 'axios';
const API = 'https://maizoshop.onrender.com/v1/banner';

export class BannerService {
  getAllBaner() {
    return Axios.get(API);
  }
}
