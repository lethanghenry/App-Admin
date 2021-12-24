import "./App.css";
import ListCategory from "./component/Category/ListCategory";
import ListProduct from "./component/Product/ListProduct";
import ListUser from "./component/UserProduct/ListUser";

import NewCategory from "./component/Category/NewCategory";
import NewProduct from "./component/Product/NewProduct";
import NewUser from "./component/UserProduct/NewUser";

import SearchCategory from "./component/Category/SearchCategory";
import SearchProduct from "./component/Product/SearchProduct";
import SearchUser from "./component/UserProduct/SearchUser";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <html>
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div className="row">
          <div className="logo col-md-2 d-flex align-items-center justify-content-center">
            <img
              src="https://devfast.us/images/devfast-logo.png"
              width="40px"
            />
            <strong>DevFast</strong>
          </div>
          <div className="col-md-10 text-center ">
            <h2>Blogmanagement</h2>
          </div>
        </div>
        <div className="row ">
          <div className="sidebar col-md-2 pt-5 ">
            <div className="infor row  d-flex justify-content-center align-items-center mb-5">
              <div className="image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="img-circle elevation-2"
                  alt="User Image"
                  width="40px"
                />
              </div>
              <strong>User</strong>
            </div>
            <div>
              {/*  */}
              <ul className="menu1">
                <li>
                  <a href="/Product">Product</a>
                  <ul className="menu2">
                    <li>
                      <a href="/Product">List</a>
                    </li>
                    <li>
                      <a href="/Product/new">New</a>
                    </li>
                    <li>
                      <a href="/Product">Search</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Category</a>
                  <ul className="menu3">
                    <li>
                      <a href="/Category">List</a>
                    </li>
                    <li>
                      <a href="/Category/New">New</a>
                    </li>
                    <li>
                      <a href="#">Search</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">User</a>
                  <ul className="menu4">
                    <li>
                      <a href="/User">List</a>
                    </li>
                    <li>
                      <a href="/User/New">New</a>
                    </li>
                    <li>
                      <a href="#">Search</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/Category" element={<ListCategory />} />
              <Route path="/Category/New" element={<NewCategory />} />
              <Route
                path="/Category/Edit/:idCategory"
                element={<NewCategory />}
              />

              <Route path="/User" element={<ListUser />} />
              <Route path="/User/New" element={<NewUser />} />
              <Route path="/User/Edit/:idUser" element={<NewUser />} />

              <Route path="/Product" element={<ListProduct />} />
              <Route path="/Product/New" element={<NewProduct />} />
              <Route path="/Product/Edit/:idProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </div>
      </body>
      <script></script>
    </html>
  );
}

export default App;
