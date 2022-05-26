import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/ProductSection/Purchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import 'react-toastify/dist/ReactToastify.css';
import AddBlog from './Pages/Home/Blogs/AddBlog';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllProduct from './Pages/Dashboard/ManageAllProduct';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/add-blog' element={<AddBlog></AddBlog>}></Route>
        <Route path='/add-product' element={<AddBlog></AddBlog>}></Route>

        <Route path='/Dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='my-orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='add-review' element={<AddReview></AddReview>}></Route>
          <Route path='add-product' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manage-products' element={<RequireAdmin><ManageAllProduct></ManageAllProduct></RequireAdmin>}></Route>
          <Route path='manage-all-orders' element={<RequireAdmin><ManageAllOrder></ManageAllOrder></RequireAdmin>}></Route>
        </Route>


        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
