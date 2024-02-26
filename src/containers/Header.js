/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import logo from "../img/Home/Logo.jpg";
import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // ...................
  const usenavigate = useNavigate();
  const [customerlist, listupdate] = useState(null);
  const [displayusername, displayusernameupdate] = useState("");
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    } else {
      displayusernameupdate(username);
    }

    let jwttoken = sessionStorage.getItem("jwttoken");
    fetch("https://localhost:44308/Customer", {
      headers: {
        Authorization: "bearer " + jwttoken,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        listupdate(resp);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, []);
  return (
    <div className="Heading">
      <div className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link to="/" className="navbar-brand order-lg-0">
            <p
              className="mt-3"
              style={{ fontFamily: "Brush Script MT", fontSize: "30px" }}
            >
              See Ever
            </p>
          </Link>
          <div className="order-lg-2 mt-2">
            {/* <button type="button" className="btn position-relative search-bar">
              <i className="fa fa-search"></i>
              <input type="search" className="search-box" />
            </button> */}

            <button
              type="button"
              className="btn position-relative user-bar dropdown"
            >
              <span className="me-2">
                <b>{displayusername}</b>
              </span>
              <Link style={{ float: "right" }} to={"/login"}>
                <i class="bi bi-box-arrow-in-right text-secondary"></i>
              </Link>
            </button>
            <button type="button" className="btn position-relative">
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                <span class="cart-count">0</span>
              </Link>
            </button>
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link text-uppercase text-dark">
                  Trang chủ
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link text-uppercase text-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Sản phẩm
                </a>
                <ul className="dropdown-menu">
                  <li className="dropend text-center text-lg-start">
                    <a
                      href="#"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Tops
                    </a>
                    <ul className="dropdown-menu shadow text-center text-lg-start">
                      <li>
                        <Link
                          to="/all_product"
                          className="dropdown-item"
                          style={{
                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Áo thun
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/all_productSoMi"
                          className="dropdown-item"
                          style={{
                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Áo sơ mi
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/all_productDress"
                          className="dropdown-item"
                          style={{
                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Đầm
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/all_productHoodie"
                          className="dropdown-item"
                          style={{
                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Hoodie
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/all_productCardigan"
                          className="dropdown-item"
                        >
                          Cardigan
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend text-center text-lg-start">
                    <a
                      href="#"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Bottoms | Skirt | Pants
                    </a>
                    <ul className="dropdown-menu shadow text-center text-lg-start">
                      <li>
                        <Link
                          to="/all_productChanVay"
                          className="dropdown-item"
                          style={{
                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Chân váy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/all_productQuanDai"
                          className="dropdown-item"
                          style={{
                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Quần dài
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/all_productQuanDui"
                          className="dropdown-item"
                        >
                          Quần đùi
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend text-center text-lg-start">
                    <a
                      href="#"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Sets
                    </a>
                    <ul className="dropdown-menu shadow text-center text-lg-start">
                      <li>
                        <Link to="/all_productSet" className="dropdown-item">
                          Individual Sets
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend text-center text-lg-start">
                    <a
                      href="#"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Other
                    </a>
                    <ul className="dropdown-menu shadow text-center text-lg-start">
                      <li>
                        <Link
                          to="/all_productTuiXach"
                          className="dropdown-item"
                        >
                          túi sách
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link text-uppercase text-dark">
                  Về chúng tôi
                </Link>
              </li>

              <li className="nav-item border-0">
                <Link
                  to="/contact"
                  className="nav-link text-uppercase text-dark"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
