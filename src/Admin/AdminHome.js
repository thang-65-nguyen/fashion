import React, { useEffect, useState } from "react";
import HeaderAdmin from "../containers/HeaderAdmin";
import { toast } from "react-toastify";
function AdminHome(props) {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalCheckouts, setTotalCheckouts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalContact, setTotalContact] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        setTotalUsers(total);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then((response) => response.json())
      .then((data) => {
        const total = calculateTotalCartItems(data);
        setTotalCartItems(total);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);

  const calculateTotalCartItems = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.qty;
    });
    return total;
  };
  useEffect(() => {
    fetch("http://localhost:8000/checkout")
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        setTotalCheckouts(total);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/category")
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        setTotalCategories(total);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/contact")
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        setTotalContact(total);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <HeaderAdmin />
      <div class="container">
        <div class="main">
          <main class="content">
            <div class="container-fluid p-0">
              <h1 class="h3 mb-3 mt-4">Dashboard</h1>
              <div class="row">
                <div class="col-xl-12 col-xxl-5 d-flex">
                  <div class="w-100">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col mt-0">
                                <h5 class="card-title">Sản phẩm</h5>
                              </div>

                              <div class="col-auto">
                                <div class="stat text-primary">
                                  <i
                                    class="align-middle"
                                    data-feather="truck"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 class="mt-1 mb-3">2.382</h1>
                          </div>
                        </div>
                        <div class="card mt-3">
                          <div class="card-body">
                            <div class="row">
                              <div class="col mt-0">
                                <h5 class="card-title">Người dùng</h5>
                              </div>

                              <div class="col-auto">
                                <div class="stat text-primary">
                                  <i
                                    class="align-middle"
                                    data-feather="users"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 class="mt-1 mb-3">{totalUsers}</h1>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col mt-0">
                                <h5 class="card-title">Giỏ hàng</h5>
                              </div>

                              <div class="col-auto">
                                <div class="stat text-primary">
                                  <i
                                    class="align-middle"
                                    data-feather="dollar-sign"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 class="mt-1 mb-3">{totalCartItems}</h1>
                          </div>
                        </div>
                        <div class="card mt-3">
                          <div class="card-body">
                            <div class="row">
                              <div class="col mt-0">
                                <h5 class="card-title">Đặt hàng</h5>
                              </div>
                              <div class="col-auto">
                                <div class="stat text-primary">
                                  <i
                                    class="align-middle"
                                    data-feather="shopping-cart"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 class="mt-1 mb-3">{totalCheckouts}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-6">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col mt-0">
                                <h5 class="card-title">Liên hệ</h5>
                              </div>

                              <div class="col-auto">
                                <div class="stat text-primary">
                                  <i
                                    class="align-middle"
                                    data-feather="truck"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 class="mt-1 mb-3">{totalContact}</h1>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col mt-0">
                                <h5 class="card-title">Loại sản phẩm</h5>
                              </div>

                              <div class="col-auto">
                                <div class="stat text-primary">
                                  <i
                                    class="align-middle"
                                    data-feather="dollar-sign"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 class="mt-1 mb-3">{totalCategories}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
