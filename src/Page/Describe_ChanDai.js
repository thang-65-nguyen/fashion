import React, { useState } from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import "../css/Describe.css";
import anh1 from "../img/Home/product/Bomber_Jacket.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Describe_ChanDai = () => {
  const [selectedSize, setSelectedSize] = useState("");
  function handleSizeClick(event) {
    setSelectedSize(event.target.dataset.size);
  }
  const [empdata, empdatachange] = useState({});
  const { empid } = useParams();
  useEffect(() => {
    fetch(" http://localhost:8000/Quan_dai/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
  const [previewImg, setPreviewImg] = useState(empdata.image);
  useEffect(() => {
    setPreviewImg(empdata.image);
  }, [empdata]);
  return (
    <div>
      <Header />
      <div>
        {/* Đoạn code 2 */}
        <div style={{ background: "#f5f5f5" }}>
          <div className="container">
            <div className="row">
              <ul className="nav-product-describe" style={{ marginTop: 10 }}>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/all_product">Bottoms | Skirt | Paints</Link>
                </li>
                <li className="text-primary">Quần dài</li>
              </ul>
            </div>
          </div>
        </div>
        {empdata && (
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-5">
                <img
                  src={previewImg}
                  className="img-product-mt"
                  alt="true"
                  id="imageBox"
                  style={{ width: "100%" }}
                />
                <div class="img-select product-small-img">
                  <img
                    src={empdata.image}
                    class="img-select-item"
                    alt="true"
                    key={empid}
                    onclick={() => setPreviewImg(empdata.image)}
                  />
                  <img
                    src={empdata.image_reverse}
                    class="img-select-item"
                    alt="true"
                    key={empid}
                    onclick={() => setPreviewImg(empdata.image)}
                  />
                  <img
                    src={empdata.Img_bo_sung}
                    class="img-select-item"
                    alt="true"
                    key={empid}
                    onclick={() => setPreviewImg(empdata.image)}
                  />
                </div>
              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 describe">
                <h3 className="text-uppercase">{empdata.name}</h3>
                <span
                  style={{
                    color: "#222",
                    fontSize: 24,
                    fontWeight: 700,
                    verticalAlign: "middle",
                    fontFamily: "Arial Black",
                  }}
                >
                  {empdata.price}₫
                </span>

                <div className="size-selector">
                  <p>Size:</p>
                  <div className="size-selector-buttons d-flex">
                    <button
                      className={`size-selector-button ${
                        selectedSize === "s" ? "selected" : ""
                      }`}
                      onClick={handleSizeClick}
                      data-size="s"
                    >
                      S
                    </button>
                    <button
                      className={`size-selector-button ms-2 me-2 ${
                        selectedSize === "m" ? "selected" : ""
                      }`}
                      onClick={handleSizeClick}
                      data-size="m"
                    >
                      M
                    </button>
                    <button
                      className={`size-selector-button ${
                        selectedSize === "l" ? "selected" : ""
                      }`}
                      onClick={handleSizeClick}
                      data-size="l"
                    >
                      L
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <span>Số lượng:</span>
                  <div className="quantity mt-3">
                    <button className="cart-minus">-</button>
                    <input
                      type="number"
                      max={10}
                      min={1}
                      className="cart-quantity"
                      defaultValue={1}
                    />
                    <button className="cart-plus">+</button>
                  </div>
                </div>
                <button
                  className="mt-4 btn-gh"
                  onClick={() =>
                    addCart(empdata.title, empdata.price, empdata.image)
                  }
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div
                  className="content"
                  style={{ border: "1px solid grey", padding: 10 }}
                >
                  <span
                    className="text-uppercase position-absolute translate-middle"
                    style={{
                      padding: "10px 40px",
                      cursor: "pointer",
                      backgroundColor: "red",
                      color: "white",
                      marginLeft: 100,
                      marginTop: "-9px",
                      borderRadius: 10,
                    }}
                  >
                    Mô tả
                  </span>

                  <p className="mt-4">{empdata.descriptive}</p>
                  <img
                    src={empdata.image_size}
                    className="img-product-mt"
                    alt="true"
                    id="imageBox"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col">
              <h3
                style={{
                  fontSize: 23,
                  padding: 10,
                  backgroundColor: "#cccccc",
                  display: "inline-block",
                  borderRadius: 10,
                  color: "white",
                }}
              >
                Sản phẩm liêng quan
              </h3>
              <div className="product-grid-Describe">
                {/* item 1 */}
                <div className="product-Describe">
                  <div className="product-img">
                    <img src={anh1} alt="true" />
                    <img src={anh1} className="rear-img" alt="true" />
                  </div>
                  <div className="product-info">
                    <div>
                      <span className="product-name">Straing Coat</span>
                    </div>
                    <div>
                      <span className="product-price">120.000 VNĐ</span>
                    </div>
                    <hr />
                    <a href="#" className="product-btn">
                      Buy now
                    </a>
                  </div>
                </div>
                {/* item 2 */}
                <div className="product">
                  <div className="product-img">
                    <img src={anh1} alt="true" />
                    <img src={anh1} className="rear-img" alt="true" />
                  </div>
                  <div className="product-info">
                    <div>
                      <span className="product-name">Straing Coat</span>
                    </div>
                    <div>
                      <span className="product-price">120.000 VNĐ</span>
                    </div>
                    <hr />
                    <a href="#" className="product-btn">
                      Buy now
                    </a>
                  </div>
                </div>
                {/* item 3 */}
                <div className="product">
                  <div className="product-img">
                    <img src={anh1} alt="trues" />
                    <img src={anh1} className="rear-img" alt="true" />
                  </div>
                  <div className="product-info">
                    <div>
                      <span className="product-name">Straing Coat</span>
                    </div>
                    <div>
                      <span className="product-price">120.000 VNĐ</span>
                    </div>
                    <hr />
                    <a href="#" className="product-btn">
                      Buy now
                    </a>
                  </div>
                </div>
                {/* item 4 */}
                <div className="product">
                  <div className="product-img">
                    <img src={anh1} alt="true" />
                    <img src={anh1} className="rear-img" alt="true" />
                  </div>
                  <div className="product-info">
                    <div>
                      <span className="product-name">Straing Coat</span>
                    </div>
                    <div>
                      <span className="product-price">120.000 VNĐ</span>
                    </div>
                    <hr />
                    <a href="#" className="product-btn">
                      Buy now
                    </a>
                  </div>
                </div>
                {/* --- */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Describe_ChanDai;
