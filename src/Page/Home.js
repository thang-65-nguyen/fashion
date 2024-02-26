// product

import Home01 from "../img/Home/home01.jpg";
import Home02 from "../img/Home/home02.jpg";
import Home03 from "../img/Home/home03.jpg";
import Home04 from "../img/Home/home04.jpg";

// ----------------------
import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    loadBanner();
  }, []);
  const loadBanner = async () => {
    const result = await axios.get("http://localhost:8000/slider_home");
    setBanners(result.data);
  };

  return (
    <>
      <Header />
      <div>
        {/* Đoạn code 2 */}

        <div
          id="position-img"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {banners.map((banner, index) => (
            <>
              <div className="carousel-inner" key={banner.id}>
                <div className="carousel-item active">
                  <img
                    src={banner.image}
                    className="d-block w-100"
                    alt="true"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={banner.image01}
                    className="d-block w-100"
                    alt="true"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={banner.image02}
                    className="d-block w-100"
                    alt="true"
                  />
                </div>
              </div>
            </>
          ))}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#position-img"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#position-img"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/*---------*/}
        {/* Đoạn code 4 */}
        <div>
          <div className="container mt-5 mb-5">
            <h1 className="text-center text-uppercase mb-3">Feature</h1>
            <div className="row row-cols-1 gy-lg-0 gy-4 row-full-width home-banner">
              <div className="col-12 col-md-6 col-sm-12 col-lg-6">
                <div className="fullwrap">
                  <Link to="/all_product">
                    <img src={Home01} alt="true" />
                    <div className="fullcap">
                      <h4 className="feature-headline">Tops</h4>
                      <p className="feature-subline">Shop our new arrival</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-sm-12 col-lg-6">
                <div className="fullwrap">
                  <Link>
                    <img src={Home02} alt="true" />
                    <div className="fullcap">
                      <h4 className="feature-headline">
                        Bottoms | Skirt | Pants
                      </h4>
                      <p className="feature-subline">Shop our new arrival</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-sm-12 col-lg-6 mt-2">
                <div className="fullwrap">
                  <Link>
                    <img src={Home03} alt="true" />
                    <div className="fullcap">
                      <h4 className="feature-headline">Sets</h4>
                      <p className="feature-subline">Shop our new arrival</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-sm-12 col-lg-5 mt-2">
                <div className="fullwrap">
                  <Link to="/all_productTuiXach">
                    <img src={Home04} alt="true" />
                    <div className="fullcap">
                      <h4 className="feature-headline">Other</h4>
                      <p className="feature-subline">Shop our new arrival</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth />
      <Footer />
    </>
  );
};
export default Home;
