import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Input } from "reactstrap";
import HeaderAdmin from "../containers/HeaderAdmin";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
const AdminProduct = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await axios
      .get("http://localhost:8000/Quan_Dui")
      .then((res) => setData(res.data));
  };
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8000/Quan_Dui/" + id)
      .then((res) => toast.success("delete success"));
    getUser();
  };
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    image_reverse: "",
    image_size: "",
    category: "",
    descriptive: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    price: "",
    image: "",
    image_reverse: "",
    image_size: "",
    category: "",
    descriptive: "",
    id: "",
  });
  const handleUpdate = async () => {
    await axios
      .put(`http://localhost:8000/Hoodie/${updateData.id}`, updateData)
      .then((res) => {
        toast.success("User update Success");
        getUser();
      });
  };
  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:8000/Hoodie", formData);
    if (response) {
      toast.success("Data submitted successfully");
    } else {
      toast.error("something went wrong");
    }
    setFormData({
      name: "",
      price: "",
      image: "",
      image_reverse: "",
      image_size: "",
      category: "",
      descriptive: "",
    });
  };
  const styleImage = {
    border: "30px",
    height: "100px",
    wight: "50px",
  };
  const [value, setValue] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:8000/Hoodie/?q=${value}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleReset = () => {
    setValue("");
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
                    Thêm sản phẩm
                  </h5>
                  <Link
                    to="/admin/product"
                    type="button"
                    className="close border-0 bg-transparent"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    <span aria-hidden="true" className="text-danger fs-3">
                      &times;
                    </span>
                  </Link>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên</label>
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
                    <label htmlFor="exampleInputPrice">Giá</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPrice"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImage">Hình ảnh</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImage"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImage_reverse">
                      Hình ảnh thêm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImage_reverse"
                      value={formData.image_reverse}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          image_reverse: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImg_size">Ảnh kích thước</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImg_size"
                      value={formData.image_size}
                      onChange={(e) =>
                        setFormData({ ...formData, image_size: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputCategory">Loại sản phẩm</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCategory"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputDescriptive">Mô tả</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDescriptive"
                      value={formData.descriptive}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          descriptive: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="/admin/product"
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
                    Thêm mới sản phẩm
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
                    Sửa sản phẩm
                  </h5>
                  <Link
                    to="/admin/product"
                    type="button"
                    className="close border-0 bg-transparent"
                    data-bs-dismiss="modal"
                    aria-bs-label="Close"
                  >
                    <span aria-hidden="true" className="text-danger fs-3">&times;</span>
                  </Link>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên</label>
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
                    <label htmlFor="exampleInputPrice">Giá</label>
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
                    <label htmlFor="exampleInputImage">Hình ảnh</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImage"
                      value={updateData.image}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          image: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImg_reverse">Ảnh phụ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImg_reverse"
                      value={updateData.image_reverse}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          image_reverse: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputImg_size">Ảnh kích thước</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputImg_size"
                      value={updateData.image_size}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          image_size: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputCategory">Loại sản phẩmphẩm</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCategorys"
                      value={updateData.category}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          category: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputDescriptive">Mô tảtả</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDescriptive"
                      value={updateData.descriptive}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          descriptive: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="/admin/product"
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
                    onClick={() => handleUpdate()}
                  >
                    Cập nhật sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ......................... */}
      </form>
      <h1 className="text-center">Danh sách sản phẩm</h1>
      <div className="container">
        <div style={{ display: "flex" }}>
          <button
            className="btn btn-info me-2 mb-3 text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalAdd"
            onClick={() => setFormData({})}
          >
            Thêm mới sản phẩm
          </button>
          <form onSubmit={handleSearch}>
            <Input
              type="text"
              className="form-control"
              placeholder="Nhập từ cần tìm..."
              name="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <CustomButton type="submit">Tìm kiếm</CustomButton>
            <CustomButton onClick={() => handleReset()}>Reset</CustomButton>
          </form>
        </div>
      </div>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Mã</th>
            <th scope="col">Tên</th>
            <th scope="col">GIá</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Ảnh phụphụ</th>
            <th scope="col">Ảnh kích thước</th>
            <th scope="col">Loại sản phẩm</th>
            <th scope="col">Mô tả</th>
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
                <td>
                  <img src={Hoodie.image} style={styleImage} />
                </td>
                <td>
                  <img src={Hoodie.image_reverse} style={styleImage} />
                </td>
                <td>
                  <img src={Hoodie.image_size} style={styleImage} />
                </td>
                <td>{Hoodie.category}</td>
                <td>{Hoodie.descriptive}</td>
                <td style={{ display: "flex" }}>
                  <button
                    className="btn btn-info me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>
                      setUpdateData({
                        name: Hoodie.name,
                        price: Hoodie.price,
                        image: Hoodie.image,
                        image_reverse: Hoodie.image_reverse,
                        image_size: Hoodie.image_size,
                        category: Hoodie.category,
                        descriptive: Hoodie.descriptive,
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
      {/* ------------------------- */}
    </>
  );
};
export default AdminProduct;
