/* eslint-disable jsx-a11y/iframe-has-title */
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import "../css/contact.css";
import ScrollToTop from "react-scroll-to-top";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    const data = await response.json();
    toast.success("Gửi tin nhắn thành công");
    navigate("/contact");
    console.log(data);
  };
  return (
    <>
      <Header />
      <div>
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <div className="container">
            <div className="row">
              <ul className="nav-product">
                <li>
                  <a href="clothes.html">Trang chủ</a>
                </li>
                <li>Liên hệ</li>
              </ul>
            </div>
          </div>
        </div>
        {/* doan code 3  */}
        <div className="container mt-3">
          <div className="row">
            <h3>Liên hệ</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4163413203096!2d106.62582077085973!3d10.855904391627904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529deaaaaaaab%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8OybiAoU2FpR29uVGVjaCk!5e0!3m2!1sfr!2s!4v1671094776796!5m2!1sfr!2s"
              width={1110}
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="row mt-4 row-cols-1">
            <div className="col-lg-6">
              <p className="text-uppercase text-contact">
                <i className="fa-solid fa-envelope" /> Để lại lời nhắn cho chúng
                tôi
              </p>
              <hr />
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-group d-block">
                      <div className="input-content d-flex">
                        <span className="span-item">
                          <i className="fa fa-user" />
                        </span>
                        <input
                          type="text"
                          className="input-item"
                          placeholder="Họ và tên"
                          onChange={handNameChange}
                        />
                      </div>
                      <div className="input-content d-flex mt-2">
                        <span className="span-item">
                          <i className="fa fa-envelope" />
                        </span>
                        <input
                          type="email"
                          className="input-item"
                          placeholder="Email đầy đủ"
                          onChange={handleEmailChange}
                        />
                      </div>
                      <div className="input-content d-flex mt-2">
                        <span className="span-item">
                          <i className="fa fa-phone" />
                        </span>
                        <input
                          type="text"
                          className="input-item"
                          placeholder="Số điện thoại"
                          onChange={handlePhoneChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-0">
                    <div className="title-note">
                      <textarea
                        placeholder="Viết lời nhắn"
                        defaultValue={""}
                        onChange={handleMessageChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center mb-3">
                    <button
                      type="button "
                      className="btn-contact"
                      onChange={onSubmit}
                    >
                      Gửi lời nhắn
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <p className="text-contact text-uppercase">
                Chúng tôi sẽ kết nối ngay lập tức khi bạn cần trợ giúp.
              </p>
              <hr />
              <p>
                <i className="fa fa-building" />{" "}
                <span className="ms-2">See Ever</span>
              </p>
              <p>
                <i className="fa fa-phone" />{" "}
                <span className="ms-2">028 555 555</span>
              </p>
              <p>
                <i className="fa fa-map-marker" />{" "}
                <span className="ms-2">
                  {" "}
                  Công viên Phần Mềm Quang Trung, Lô 14 Đường Số 5, Tân
                  HưngThuận, Quận 12, Thành phố Hồ Chí Minh
                </span>
              </p>
              <p>
                <i className="fa fa-envelope" />{" "}
                <span className="ms-2">seeever.loveyou@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth />
      <Footer />
    </>
  );
};
export default Contact;
