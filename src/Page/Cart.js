import { Link, useNavigate } from "react-router-dom";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import "../css/Cart.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems();
  }, []);
  const navigate = useNavigate();
  const [total, setTotal] = useState();

  const checkoutcard = () => {
    navigate("/checkout");
  };
  var totalPrice = 0;
  const loadItems = async () => {
    const result = await axios.get("http://localhost:8000/cart");
    setItems(result.data);
    result.data.map((item) => {
      totalPrice += item.qty * Number(item.price);
    });
    setTotal(totalPrice);
  };
  const deleteCart = async (id) => {
    let IsDelete = window.confirm(
      "Bạn có chắc không? Mặt hàng này sẽ bị xóa khỏi đơn đặt hàng của bạn!"
    );
    if (IsDelete) {
      await axios.delete(`http://localhost:8000/cart/${id}`);
      loadItems();
      toast.success("Xoá sản phẩm thành công");
    }
  };
  const incDec = async (a, b, c, d, e, f) => {
    if (c === "dec") {
      if (a === 1) {
        a = 1;
      } else {
        a -= 1;
      }
    } else {
      if (a === 20) {
        a = 20;
        toast.error("Số lượng không thể vượt quá 20!");
        return;
      } else {
        a += 1;
      }
    }
    const cart = { name: d, price: e, qty: a, image: f };
    await axios.put(`http://localhost:8000/cart/${b}`, cart);
    loadItems();
  };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <ul className="nav-product">
              <li>
                <Link to="/">Trang chu</Link>
              </li>
              <li>Giỏ hàng</li>
            </ul>
          </div>
        </div>
      </div>
      {/* code doan 3 */}
      <div className="container">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mt-3">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th></th>
              </thead>
              <tbody className="align-middle">
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="align-middle">
                      <img src={item.image} alt="true" style={{ width: 50 }} />{" "}
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle">{item.price} VNĐ</td>
                    <td className="align-middle">
                      <button
                        className="minus"
                        onClick={() =>
                          incDec(
                            item.qty,
                            item.id,
                            "dec",
                            item.name,
                            item.price,
                            item.image
                          )
                        }
                      >
                        -
                      </button>
                      <input value={item.qty} className="cart_input qty text" />
                      <button
                        className="plus"
                        onClick={() =>
                          incDec(
                            item.qty,
                            item.id,
                            "inc",
                            item.name,
                            item.price,
                            item.image
                          )
                        }
                      >
                        +
                      </button>
                    </td>
                    <td className="align-middle">
                      {item.price * item.qty} VNĐ
                    </td>
                    <td className="align-middle">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteCart(item.id)}
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Tổng phụ</h6>
                  <h6>{total}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Giảm giá</h6>
                  <h6 className="font-weight-medium">0</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Tổng tiền</h5>
                  <h5>{total}</h5>
                </div>
                <button
                  onClick={checkoutcard}
                  className="btn btn-block btn-primary-cart font-weight-bold my-3 py-3"
                >
                  Tiến hành kiểm tra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Cart;
