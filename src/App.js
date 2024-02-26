import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import Contact from "./Page/Contact";
import AllProduct from "./Page/AllProduct";
import AllProductSoMi from "./Page/AllProductSoMi";
import AllProductDress from "./Page/AllProductDress";
import AllProductHoodie from "./Page/AllProductHoodie";
import AllProductCardigan from "./Page/AllProductCardigan";
import AllProductChanVay from "./Page/AllProductChanVay";
import AllProductQuanDai from "./Page/AllProductQuanDai";
import AllProductQuanDui from "./Page/AllProductQuanDui";
import AllProductSet from "./Page/AllProductSet";
import Checkout from "./Page/Checkout";
import Describe from "./Page/Describe";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Describe_Cardigan from "./Page/Describe_Cardigan";
import About from "./Page/About";
import AdminHome from "./Admin/AdminHome";
import AllProductTuiXach from "./Page/AllProductTuiXach";
import Describe_ChanDai from "./Page/Describe_ChanDai";
import AddUser from "./Admin/User";
import AdminProduct from "./Admin/AdminProduct";
import NotFound from "./Admin/NotFound";
import CheckOutAdmin from "./Admin/CheckOutAdmin";
import ContactAdmin from "./Admin/ContactAdmin";
import CartAdmin from "./Admin/CartAdmin";
import CategoryAdmin from "./Admin/CategoryAdmin"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* gio hang  */}
        <Route path="/cart" element={<Cart />} />
        {/* check out  */}
        <Route path="/checkout" element={<Checkout />} />
        {/* lien he  */}
        <Route path="/contact" element={<Contact />} />
        {/* san pham  */}
        <Route path="/all_product" element={<AllProduct />} />
        <Route path="/all_productSoMi" element={<AllProductSoMi />} />
        <Route path="/all_productDress" element={<AllProductDress />} />
        <Route path="/all_productHoodie" element={<AllProductHoodie />} />
        <Route path="/all_productCardigan" element={<AllProductCardigan />} />
        <Route path="/all_productChanVay" element={<AllProductChanVay />} />
        <Route path="/all_productQuanDai" element={<AllProductQuanDai />} />
        <Route path="/all_productQuanDui" element={<AllProductQuanDui />} />
        <Route path="/all_productTuiXach" element={<AllProductTuiXach />} />
        <Route path="/all_productSet" element={<AllProductSet />} />
        {/* mo ta san pham  */}
        <Route path="/describe/:empid" element={<Describe />} />
        <Route
          path="/describe_cardigan/:empid"
          element={<Describe_Cardigan />}
        />
        <Route path="/describe_chandai/:empid" element={<Describe_ChanDai />} />
        {/* gioi hieu  */}
        <Route path="/about" element={<About />} />
        {/* login  */}
        <Route path="/login" element={<Login />} />
        {/* register  */}
        <Route path="/register" element={<Register />} />
        {/* admin  */}
        <Route path="/admin" element={<AdminHome />} />
        {/* admin product  */}
        <Route path="/admin/product" element={<AdminProduct />} />
        {/* admin user  */}

        <Route path="/admin/user" element={<AddUser />} />
        <Route path="/admin/checkout" element={<CheckOutAdmin />} />
        <Route path="/admin/contact" element={<ContactAdmin />} />
        <Route path="/admin/cart" element={<CartAdmin />} />
        <Route path="/admin/category" element={<CategoryAdmin />} />

        {/* .... */}
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
