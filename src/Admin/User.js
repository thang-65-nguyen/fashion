import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import HeaderAdmin from "../containers/HeaderAdmin";
const AddUser = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await axios
      .get("http://localhost:8000/user")
      .then((res) => setData(res.data));
  };
  const handleDelete = async (id) => {
    await axios
      .delete(" http://localhost:8000/user/" + id)
      .then((res) => toast.success("delete success"));
    getUser();
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
  });
  const handleFormSubmit = async (e) => {
    let response = await axios.post(" http://localhost:8000/user", formData);
    if (response) {
      toast.success("Data submitted successfully");
    } else {
      toast.error("something went wrong");
    }
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      gender: "",
    });
  };
  return (
    <>
      <HeaderAdmin />
      <form>
        <div className="container mb-3 mt-3">
          {/* ........... */}
          <div
            className="modal fade"
            id="exampleModalAdd"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Thêm người dùng
                  </h5>
                  <Link
                    to="/admin/user"
                    type="button"
                    className="close border-0 bg-transparent"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    <span aria-bs-hidden="true" className="text-danger fs-3">&times;</span>
                  </Link>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Họ và tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPhone">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPhone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputAddress">Địa chỉ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAddress"
                      placeholder="Password"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputGender">Giới tính</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputGender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="/admin/user"
                    type="button"
                    className="close btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    Thoát
                  </Link>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleFormSubmit}
                  >
                    Thêm mới người dùng
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ......................... */}
        </div>
        {/* ......................... */}
      </form>
      <div className="container">
        <h1 className="text-center">Danh sách tài khoản</h1>
        <button
          className="btn btn-info me-2 mb-3 text-white"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalAdd"
          onClick={() => setFormData({})}
        >
          Thêm mới
        </button>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Email</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
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
export default AddUser;
