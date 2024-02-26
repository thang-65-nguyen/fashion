import Footer from "../containers/Footer";
import Header from "../containers/Header";
import about_1 from "../img/About/VeChungToi.jpg";
import about_2 from "../img/About/VeChungToi1.jpg";
import "../css/About.css";
const About = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <ul className="nav-product">
              <li>
                <a href="clothes.html">Trang chu</a>
              </li>
              <li>Về chúng tôi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col text-center">
            <p className="about">Về chúng tôi</p>
          </div>
        </div>
        <div className="row row-cols-1 pb-4">
          <div className="col col-md-6 text-start">
            <h2>TẦM NHÌN CỦA CHÚNG TÔI</h2>
            <p>
              Chúng tôi bắt đầu với mục tiêu rõ ràng bằng việc tập trung vào đối
              tượng khách hàng thuộc tầng lớp giới trẻ, những người năng động,
              gắn bó với môi trường sống xung quanh, những người sống trong cộng
              đồng và luôn được gắn kết với nhau. Những người trẻ tuổi có phong
              cách ăn mặc giản dị, ghét định kiến và muốn thoải mái với bất cứ
              thứ gì họ mặc
            </p>
          </div>
          <div className="col col-md-6">
            <img src={about_1} className="img-fluid" alt="true" />
          </div>
        </div>
        <div className="row row-cols-1 mt-2">
          <hr />
          <div className="col col-md-6 text-start">
            <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
            <p>
              Để đáp ứng nhu cầu của khách hàng, chúng tôi nắm bắt những xu
              hướng thời trang mới nhất, pha trộn với những hình ảnh được nhìn
              thấy trên đường phố và làm lại chúng theo phong cách của Look để
              biến chúng thành những trang phục thoải mái và dễ mặc. Các sản
              phẩm của Look chú trọng vào 3 yếu tố
            </p>
          </div>
          <div className="col col-md-6">
            <p>
              FRESH
              <br />
              <em>
                <span style={{ fontSize: 14 }}>Năng động tươi mới</span>
              </em>
            </p>
            <p>
              CLEAN
              <br />
              <em>
                <span style={{ fontSize: 14 }}>Sạch sẽ, gọn gàng</span>
              </em>
            </p>
            <p>
              COMPORT
              <br />
              <em>
                <span style={{ fontSize: 14 }}>Thỏa mái, dễ chịu</span>
              </em>
            </p>
          </div>
        </div>
        <div className="row">
          <img src={about_2} alt="true" />
        </div>
        <div className="row mt-5">
          <p>
            Chúng tôi có 2 dòng sản phẩm riêng biệt. Dòng sản phẩm đầu tiên tập
            trung vào giới trẻ vị thành niên, với phong cách ăn mặc giản dị và
            dễ dàng với áo phông, quần nỉ, quần short, mũ cap... Dòng sản phẩm
            tiếp theo với những thiết kế đặc biệt cao cấp hơn cho những bạn trẻ
            đã đồng hành cùng thương hiệu từ khi còn trẻ, tìm đến Look với nhu
            cầu về những sản phẩm chất lượng cao, mang phong cách chiết trung,
            có thể mặc ban ngày hay buổi tối, đi làm, đi học hay đi chơi.
          </p>
        </div>
        <hr />
        <div className="about-us-50" style={{ width: "50%", margin: "0 auto" }}>
          <h2>ĐỊNH HƯỚNG CỦA CHÚNG TÔI</h2>
          <div style={{ marginBottom: 50 }}>
            <p>
              Look luôn phát triển song hành với khách hàng của mình, bằng cách
              bắt kịp những xu hướng về công nghệ, những thay đổi trong cộng
              đồng/xã hội, và đổi mới trong âm nhạc và nghệ thuật. Điều này
              không chỉ thể hiện qua thiết kế sản phẩm mà còn được thấy qua
              những chiến dịch truyền thông hướng đến xây dựng một cộng đồng văn
              minh, hiện đại và nhân văn.
            </p>
            <p>
              Hi vọng các bạn có thể theo dõi và đồng hành cùng chúng tôi trên
              con đường đó. &nbsp;
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default About;
