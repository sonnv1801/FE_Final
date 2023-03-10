import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/hompage/HomePage';
import Shop from './pages/home/shop/Shop';
import Card from './components/cards/Card';
import { Payment } from './pages/home/payment/Payment';
import Login from './pages/home/login/Login';
import NotFound from './pages/home/notfound/NotFound';
import Register from './pages/home/register/Register';
import { Order } from './pages/home/order/Order';
import ProductDetail from './pages/home/productDetail/ProductDetail';
import Profile from './pages/home/profile/Profile';
import Nav from './components/navbar/Nav';
import Adminpage from './pages/admin/Adminpage';
import EditProduct from './pages/admin/updateProducts/EditProduct';
import ListTypeAdmin from './pages/admin/listTypeAdmin/ListTypeAdmin';
import ListUser from './pages/admin/listuser/ListUser';
import ListProductAdmin from './pages/admin/listProductadmin/ListProductAdmin';
import ListOderAdmin from './pages/admin/listOderAdmin/ListOderAdmin';
import ListOrderToday from './pages/admin/listOderAdmin/listordertoday/ListOrderToday';
import RatingAd from './pages/admin/rateAdmin/RatingAd';
import DetailRateAd from './pages/admin/rateAdmin/detailRateAd/DetailRateAd';
import DetailorderAd from './pages/admin/listOderAdmin/detailOrderAdmin/detailorderAd';
import RepcmtAd from './pages/admin/rateAdmin/repcmtAd/RepcmtAd';

function App() {
  const user = JSON.parse(localStorage.getItem('token'));
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/shop/:id/:fill" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<Card />} />
          {user === null ? (
            <>
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/payment" element={<Payment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/order" element={<Order />} />
              <Route path="/admin/:id" element={<EditProduct />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
          {user?.role === true ? (
            <>
              <Route path="/admin" element={<Adminpage />} />
              <Route path="/admin/type" element={<ListTypeAdmin />} />
              <Route path="/admin/user" element={<ListUser />} />
              <Route path="/admin/product" element={<ListProductAdmin />} />
              <Route path="/admin/orders" element={<ListOderAdmin />} />
              <Route path="/admin/orders/today" element={<ListOrderToday />} />
              <Route path="/admin/rate" element={<RatingAd />} />
              <Route path="/admin/rate/cmt" element={<RepcmtAd />} />

              <Route
                path="/admin/detailRating/:id"
                element={<DetailRateAd />}
              />
              <Route
                path="/admin/detailorder/:id"
                element={<DetailorderAd />}
              />
            </>
          ) : (
            <Route path="*" element={<NotFound />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
