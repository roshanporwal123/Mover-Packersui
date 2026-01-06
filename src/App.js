import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/HeaderComponent/Header";
import Content from "./components/ContentComonent/Content";
import Banner from "./components/BannerComponent/Banner";
import Footer from "./components/FooterComponent/Footer";
import About from "./components/AboutComponent/About";
import Contact from "./components/ContactComponent/Contact";
import Service from "./components/ServiceComponent/Service";
import Register from "./components/RegisterComponent/Register";
import Login from "./components/LoginComponent/Login";
import UserHome from './components/UserHomeComponent/UserHome';
import AdminHome from './components/AdminHomeComponent/AdminHome';
import Logout from './components/LogoutComponent/Logout';
import ManageUsers from './components/ManageUsers/ManageUsers';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import EPUser from './components/EPUserComponent/EPUser';
import CPUser from './components/CPUserComponent/CPUser';
import AddSubCategory from './components/AddSUbCategoryComponent/AddSubCategory';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory';
import Charity from './components/CharityComponent/Charity';
import Payment from './components/PaymentComponent/Payment';
import Success from './components/SuccessComponent/Success';
import Cancel from './components/CancelComponent/Cancel';
import AiChat from './components/AiChatBoatComponent/aiChatUi';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import ViewCharity from "./components/ViewCharityComponent/ViewCharity";
import AddConsignment from "./components/AddConsignmentComponent/AddConsignment";
import ManageOrders from "./components/ManageOrdersComponent/ManageOrders";
import ConsignmentStatus from "./components/ViewConsignmentStatusComponent/ViewConsignmentStatus";

function App() {
  return (
    <>
      <Header />

     <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
/>

      <Routes>
        <Route path="/" element={<><Banner /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/ai" element={<><AiChat /></>} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vemail/:email" element={<Verifyuser />} />
        <Route path="/epadmin" element={<EPAdmin />} />
        <Route path="/epuser" element={<EPUser />} />
        <Route path="/cpadmin" element={<CPAdmin />} />
        <Route path="/cpuser" element={<CPUser />} />
        <Route path="/addconsignment" element={<AddConsignment />} />
        <Route path="/track" element={<ConsignmentStatus/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<UserHome />} />
        <Route path="/viewcategory" element={<ViewCategory />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/viewcharity" element={<ViewCharity />} />
        <Route path="/searchsc/:cnm" element={<ViewSubCategory />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/addsubcategory" element={<AddSubCategory />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/manageorders" element={<ManageOrders />} />
        <Route path="/payment/:uid/:amt" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
