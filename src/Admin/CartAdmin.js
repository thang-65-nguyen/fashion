import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import HeaderAdmin from "../containers/HeaderAdmin";
const CartAdmin = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await axios
      .get("http://localhost:8000/cart")
      .then((res) => setData(res.data));
  };
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8000/cart/" + id)
      .then((res) => toast.success("delete success"));
    getUser();
  };
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    qty: "",
    image: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    price: "",
    qty: "",
    image: "",
    id: "",
  });
  const handleUpdate = async () => {
    await axios
      .put(`http://localhost:8000/cart/${updateData.id}`, updateData)
      .then((res) => {
        toast.success("User update Success");
        getUser();
      });
  };
  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:8000/cart", formData);
    if (response) {
      toast.success("Data submitted successfully");
    } else {
      toast.error("something went wrong");
    }
    setFormData({
      name: "",
      price: "",
      qty: "",
      image: "",
    });
  };
  const styleImage = {
    border: "30px",
    height: "100px",
    wight: "50px",
  };
  return (
    <>
      <HeaderAdmin />
      <form>
        <div className="container mb-3 mt-3">
          {/* ........... */}
          {/* ......................... */}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Sửa giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="close border-0 bg-transparent"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    <span aria-hidden="true" className="text-danger fs-3">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={updateData.name}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPrice">Giá tiền</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPrice"
                      value={updateData.price}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, price: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImg_reverse">Số lượng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImg_reverse"
                      value={updateData.qty}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          qty: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImg_reverse">Hình ảnh</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImg_reverse"
                      value={updateData.image}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          image: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    Thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => handleUpdate()}
                  >
                    Cập nhật giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ......................... */}
      </form>
      <h1 className="text-center">Danh sách giỏ hàng</h1>
      <div className="container">
        <table className="table table-bordered table-hover table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượlượng</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((Hoodie) => (
                <tr>
                  <th scope="row">{Hoodie.id}</th>
                  <td>{Hoodie.name}</td>
                  <td>{Hoodie.price}</td>
                  <td>{Hoodie.qty}</td>
                  <td>
                    <img src={Hoodie.image} style={styleImage} />
                  </td>
                  <td>
                    <button
                      className="btn btn-info me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() =>
                        setUpdateData({
                          name: Hoodie.name,
                          price: Hoodie.price,
                          qty: Hoodie.qty,
                          image: Hoodie.image,
                          id: Hoodie.id,
                        })
                      }
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(Hoodie.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* ------------------------- */}
    </>
  );
};
export default CartAdmin;
