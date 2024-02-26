import React from "react";
import { Link, NavLink } from "react-router-dom";
import anh1 from "../img/Home/Logo.jpg";
const HeaderAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-info">
      <div className="container ">
        <NavLink className="navbar-brand text-dark text-start" to="/admin">
          <h3>
            <strong> Admin </strong>
          </h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/admin/product">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/admin/user">
                Người dùng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/admin/checkout">
                Đặt hàng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/admin/contact">
                Liên hệ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/admin/cart">
                Giỏ hàng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/admin/category">
                Loại sản phẩm
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li class="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="bi bi-bell"></i>
              </a>

              <a
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={anh1}
                  style={{ width: "30px" }}
                  class="avatar img-fluid rounded me-1"
                  alt="Charles Hall"
                />
                <span class="text-dark">Charles Hall</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="pages-profile.html">
                  <i class="align-middle me-1" data-feather="user"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="align-middle me-1" data-feather="pie-chart"></i>
                  Analytics
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="index.html">
                  <i class="align-middle me-1" data-feather="settings"></i>
                  Settings & Privacy
                </a>
                <a class="dropdown-item" href="#">
                  <i class="align-middle me-1" data-feather="help-circle"></i>
                  Help Center
                </a>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/">
                  Log out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAdmin;
