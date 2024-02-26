import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import HeaderAdmin from "../containers/HeaderAdmin";
const ContactAdmin = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await axios
      .get("  http://localhost:8000/contact")
      .then((res) => setData(res.data));
  };
  const handleDelete = async (id) => {
    await axios
      .delete("  http://localhost:8000/contact/" + id)
      .then((res) => toast.success("delete success"));
    getUser();
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    id: "",
  });
  const handleUpdate = async () => {
    await axios
      .put(`  http://localhost:8000/contact/${updateData.id}`, updateData)
      .then((res) => {
        toast.success("User update Success");
        getUser();
      });
  };
  const handleFormSubmit = async (e) => {
    let response = await axios.post(
      "  http://localhost:8000/contact",
      formData
    );
    if (response) {
      toast.success("Data submitted successfully");
    } else {
      toast.error("something went wrong");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <HeaderAdmin />
      <form>
        <div className="container mb-3 mt-3">
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
                    Sửa liên hệ
                  </h5>
                  <button
                    type="button"
                    className="close border-0 bg-transparent"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    <span aria-hidden="true" className="text-danger fs-3">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Họ và tên</label>
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
                    <label htmlFor="exampleInputEmail1">Địa chỉ email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      value={updateData.email}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPhone">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPhone"
                      value={updateData.phone}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputAddress">Tin nhắnnhắn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAddress"
                      value={updateData.message}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          message: e.target.value,
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
                    Cập nhật liện hệ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ......................... */}
      </form>
      <div className="container">
        <h1 className="text-center">Danh sách liên hệ</h1>
        <table className="table table-bordered table-hover table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Địa chỉ email</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Tin nhắn</th>
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
                  <td>{user.phone}</td>
                  <td>{user.message}</td>
                  <td style={{ display: "flex" }}>
                    <button
                      className="btn btn-info me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() =>
                        setUpdateData({
                          name: user.name,
                          email: user.email,
                          phone: user.phone,
                          message: user.message,
                          id: user.id,
                        })
                      }
                    >
                      Sửa
                    </button>
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
export default ContactAdmin;
