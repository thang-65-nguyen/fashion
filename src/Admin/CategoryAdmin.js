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
      .get("  http://localhost:8000/category")
      .then((res) => setData(res.data));
  };
  const handleDelete = async (id) => {
    await axios
      .delete("  http://localhost:8000/category/" + id)
      .then((res) => toast.success("delete success"));
    getUser();
  };
  const [formData, setFormData] = useState({
    name: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    id: "",
  });
  const handleUpdate = async () => {
    await axios
      .put(`  http://localhost:8000/category/${updateData.id}`, updateData)
      .then((res) => {
        toast.success("User update Success");
        getUser();
      });
  };
  const handleFormSubmit = async (e) => {
    let response = await axios.post(
      "  http://localhost:8000/category",
      formData
    );
    if (response) {
      toast.success("Data submitted successfully");
    } else {
      toast.error("something went wrong");
    }
    setFormData({
      name: "",
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
                    Thêm loại sản phẩm
                  </h5>
                  <button
                    type="button"
                    className="close border-0 px-2 bg-transparent"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    <span aria-bs-hidden="true" className="text-danger fs-3">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Tên loại sản phẩm
                    </label>
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
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleFormSubmit}
                  >
                    thêm mới loại sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                    Sửa loại sản phẩm
                  </h5>
                  <button
                    type="button"
                    className="close border-0 px-2 bg-transparent"
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
                    <label htmlFor="exampleInputEmail1">
                      Tên loại sản phẩm
                    </label>
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
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => handleUpdate()}
                  >
                    Cập nhật loại sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ......................... */}
      </form>
      <div className="container">
        <h1 className="text-center">Danh sách loại sản phẩm</h1>
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
              <th scope="col">Mã loại sản phẩm</th>
              <th scope="col">Tên loại sản phẩm</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>

                  <td style={{ display: "flex" }}>
                    <button
                      className="btn btn-info me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() =>
                        setUpdateData({
                          name: user.name,

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
