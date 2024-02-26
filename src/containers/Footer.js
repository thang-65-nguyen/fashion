import { bold } from "fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{ backgroundColor: "#333", paddingBottom: 30, color: "white" }}
      >
        <div className="container">
          <div className="row row-cols-1">
            <div className="col-lg-3 mt-4">
              <h5 className="text-uppercase">thông tin công ty</h5>
              <span>Giới hiệu See Ever</span>
              <p>Blogger Thời Trang</p>
            </div>
            <div className="col-lg-3 mt-4">
              <h5>HỖ TRỢ VÀ DỊCH VỤ</h5>
              <span>Liên Hệ Chúng Tôi</span>
              <br />
              <span>Phương Thức Thanh Toán</span>
              <br />
              <span>Hướng Dẫn Đặt Hàng</span>
              <br />
            </div>
            <div className="col-lg-3 mt-4">
              <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
              <i className="fa-brands fa-facebook-f p-2" />
              <span>|</span>
              <i className="fa-brands fa-instagram p-2" />
              <span>|</span>
              <i className="fa-brands fa-twitter p-2" />
              <span>|</span>
              <i className="fa-brands fa-youtube p-2" />
              <span>|</span>
              <i className="fa-brands fa-pinterest p-2" />
              <span>|</span>
              <i className="fa-brands fa-tiktok p-2" />
            </div>
            <div className="col-lg-3 mt-4">
              <h5>NƠI LIÊN HỆ</h5>
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4163413203096!2d106.62582077085973!3d10.855904391627904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529deaaaaaaab%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8OybiAoU2FpR29uVGVjaCk!5e0!3m2!1sfr!2s!4v1671094776796!5m2!1sfr!2s"
                  width={300}
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
