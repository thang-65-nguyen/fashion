import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Vui lòng đăng nhập vào ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += "Tài khoản,";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += "Họ và tên,";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += "Mật khẩu,";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Vui lòng nhập email hợp lệ");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, address, gender };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Đăng ký thành công.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-5">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Đăng ký</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Tài khoản <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Mật khẩu <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Họ và tên <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Số điện thoại <span className="errmsg"></span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Giới tính</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label className="me-2">Nam</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
                    <label>Nữ</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-info">
                Đăng ký
              </button>
              |
              <Link to={"/login"} className="btn btn-success">
                Nếu bạn đã có tại khoản! Quay lại trang đăng nhập
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
