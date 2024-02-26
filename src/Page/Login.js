import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Vui lòng nhập tên người dùng hợp lệ");
          } else {
            if (resp.password === password) {
              toast.success("Đăng nhập thành công");
              sessionStorage.setItem("username", username);
              navigate("/");
            } else {
              toast.error("Vui lòng nhập thông tin đăng nhập hợp lệ");
            }
          }
        })
        .catch((err) => {
          toast.error("Đăng nhập không thành công do :" + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Vui lòng đăng nhập tài khoản");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Vui lòng đăng nhập mật khẩu");
    }
    return result;
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Đăng nhập</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  Tài khoản <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Mật khẩu <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-info">
                Đăng nhập
              </button>
              |
              <Link className="btn btn-success text-end" to={"/register"}>
                Nếu bạn chưa có tài khoản! Vui lòng đăng ký tại đây
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
