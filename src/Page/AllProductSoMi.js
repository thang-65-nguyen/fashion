import React from "react";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import { Link, useNavigate } from "react-router-dom";
import "../css/All_product.css";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";

const AllProductSoMi = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    loadProduct();
  }, []);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const loadProduct = async () => {
    const result = await axios.get("  http://localhost:8000/Ao_So_Mi");
    setProducts(result.data);
  };

  // -------
  let qty = 1;
  const addCart = async (a, b, c) => {
    let isExisting = false;

    const result = await axios.get("http://localhost:8000/cart");
    if (result.data.lenght === 0) {
      const cart = { name: a, price: b, image: c, qty: qty };
      axios.post("http://localhost:8000/cart", cart);
    } else {
      result.data.map((cartItem) => {
        if (a === cartItem.name) {
          cartItem.qty += 1;
          const cart = {
            name: a,
            price: b,
            image: c,
            qty: cartItem.qty,
          };
          axios.put(`http://localhost:8000/cart/${cartItem.id}`, cart);
          isExisting = true;
        }
      });
      if (isExisting == false) {
        const cart = {
          name: a,
          price: b,
          image: c,
          qty: qty,
        };
        axios.post("http://localhost:8000/cart", cart);
      }
      toast.success("Thêm vào giỏ hàng thành công");
    }
  };
  // ---
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = products.slice(startIndex, endIndex);
  // ----
  const Describe = (id) => {
    navigate("/describe/" + id);
  };
  return (
    <div>
      <Header />
      {/* doan code 2 */}
      <div style={{ backgroundColor: "#DDDDDD" }}>
        <div className="container">
          <div className="row">
            <ul className="nav-product">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <a href="#">Tops</a>
              </li>

              <li>
                <a href="/all_productSoMi">Áo sơ mi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* doan code 3 */}
      <div className="container mt-4 mb-3">
        <div className="row">
          <div className="col-lg-3">
            <div className="clearfix accordion">
              <div
                className="group-collection"
                aria-expanded="true"
                data-toggle="collapse"
              >
                <h3
                  type="button"
                  className="Danh_Muc"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                >
                  <i className="fa-solid fa-bars" /> Danh mục
                </h3>
                <hr style={{ margin: 0, opacity: "0.1" }} />
                <div id="demo" className="collapse">
                  <ul>
                    <li>
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-check-all"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                        Tops
                      </h5>
                      <Link to="/all_product">Áo Thun</Link>
                    </li>
                    <li>
                      <Link to="/all_productSoMi"> Áo sơ mi </Link>
                    </li>
                    <li>
                      <Link to="/all_productDress"> Đầm</Link>
                    </li>
                    <li>
                      <Link to="/all_productHoodie"> Hoodie</Link>
                    </li>
                    <li>
                      <Link to="/all_productCardigan">Cardigan </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-check-all"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                        Bottoms | Skirt | Pants
                      </h5>
                      <Link to="/all_productChanVay">Chân váy</Link>
                    </li>
                    <li>
                      <Link to="/all_productQuanDai"> Quần dài </Link>
                    </li>

                    <li>
                      <Link to="/all_productQuanDui"> Quần đùi </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-check-all"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                        Sets
                      </h5>
                      <Link to="/all_productSet">Individual Sets</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-check-all"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                        Other
                      </h5>
                      <Link to="/all_productTuiXach">Túi sách</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col">
                <div className="group-collection">
                  <div className="title-block">
                    <h1
                      style={{ fontSize: 20, fontWeight: 600, color: "black" }}
                    >
                      Áo Sơ Mi
                    </h1>
                    <div className="arrange">
                      <span>Sắp xếp theo: </span>
                      <span>
                        <select className="sort-by">
                          <option value>Sản phẩm nổi bật</option>
                          <option value>Giá: tăng dần</option>
                          <option value>Giá: giảm dần</option>
                          <option value>Sản phẩm bán chạy</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="grid-product">
                  {/* item 1 */}
                  {currentData.map((products, index) => {
                    return (
                      <div className="product-allsp">
                        <div className="product-img">
                          <img src={products.image} />
                          <img
                            src={products.image_reverse}
                            className="rear-img"
                          />
                        </div>
                        <div className="product-info-allsp">
                          <div>
                            <a
                              href="#"
                              onClick={() => Describe(products.id)}
                              className="text-decoration-none text-black"
                            >
                              <p className="product-name-allsp">
                                {products.name}
                              </p>
                            </a>
                            <span className="product-price">
                              {products.price}VND
                            </span>
                          </div>
                        </div>
                        <button
                          href="#"
                          className="btn_hoodie"
                          onClick={() =>
                            addCart(
                              products.name,
                              products.price,
                              products.image
                            )
                          }
                        >
                          Buy now
                        </button>
                      </div>
                    );
                  })}
                </div>
                <ReactPaginate
                  previousLabel={"Previus"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={Math.ceil(products.length / itemsPerPage)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
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
export default AllProductSoMi;
