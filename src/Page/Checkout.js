import React, { useEffect } from "react";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import "../css/Checkout.css";

import ScrollToTop from "react-scroll-to-top";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, address, phone }),
    });
    const data = await response.json();
    toast.success("Order thành công");
    navigate("/");
    console.log(data);
  };
  return (
    <div>
      <Header />
      <div>
        {/* code doan 2 */}
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <div className="container">
            <div className="row">
              <ul className="nav-product">
                <li>
                  <Link to="/">Trang chu</Link>
                </li>
                <li>
                  <Link to="/cart">Giỏ hàng</Link>
                </li>
                <li>Thông tin giao hàng</li>
              </ul>
            </div>
          </div>
        </div>
        {/* code doan 3 */}
        <div className="container pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <form onSubmit={(e) => onSubmit(e)}>
                  <h4 className="font-weight-semi-bold mb-4">
                    Thông tin giao hàng
                  </h4>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Tên</label>
                      <input
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Số điện thoại</label>
                      <input
                        className="form-control"
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Địa chỉ</label>
                      <input
                        className="form-control"
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                  <div className="card-footer border-secondary bg-transparent">
                    <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
                      Đặt hàng
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">
                    Tổng số đơn đặt hàng
                  </h4>
                </div>
                <div className="card-body">
                  <h5 className="font-weight-medium mb-3">Sản phẩm</h5>

                  <div className="d-flex justify-content-between">
                    <p>Hoodie</p>
                    <p>136.000 vnd</p>
                  </div>

                  <hr className="mt-0" />
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Tổng phụ</h6>
                    <h6 className="font-weight-medium">$150</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Tổng cộng</h5>
                    <h5 className="font-weight-bold">$160</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth />
      <Footer />
    </div>
  );
};

export default Checkout;
