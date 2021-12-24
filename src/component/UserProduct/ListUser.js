import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchUser from "./SearchUser";
// import Swal from "sweetalert2";
export default function ListUser() {
  const [userProducts, setUserProducts] = useState([]);

  // Show all list Category
  const getList = () => {
    axios
      .get(`https://localhost:44393/api/UserProducts`)
      .then((res) => {
        setUserProducts(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  // Call api get
  useEffect(() => {
    getList();
  }, []);

  // Param id
  // Delete post by id
  const deletedUserById = (id) => {
    axios
      .delete(`https://localhost:44393/api/UserProducts/${id}`)
      .then((res) => {
        alert("Delete succesful!");
        return getList();
      });
  };

  // Param nameUser
  // Search User by name User
  const searchNameUser = (nameUser) => {
    axios
      .get(
        `https://localhost:44393/api/UserProducts?nameSearchUserProduct=${nameUser}`
      )
      .then((res) => {
        setUserProducts(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <SearchUser searchNameUser={searchNameUser} />
      <div className="card">
        <div className="card-header">
          <h3>List User</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>id User</th>
                <th>review User</th>
                <th>name User</th>
                <th>email User</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userProducts.map((value, key) => {
                return (
                  <tr>
                    <td>{value.idUser}</td>
                    <td>{value.reviewUser}</td>
                    <td>{value.nameUser}</td>
                    <td>{value.emailUser}</td>
                    <td>
                      {" "}
                      <Link
                        className="btn btn-primary"
                        to={`/User/Edit/${value.idUser}`}
                      >
                        Edit
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deletedUserById(value.idUser);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
