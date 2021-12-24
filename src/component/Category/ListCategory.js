import axios from "axios";

import React from "react";
  import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchCategory from "./SearchCategory";

export default function ListCategory() {
  const [categorys, setCategorys] = useState([]);

  // Show all list Category
  const getList = () => {
    axios
      .get(`https://localhost:44393/api/Categories`)
      .then((res) => {
        setCategorys(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  console.log({ data: getList });

  // Call api get
  useEffect(() => {
    getList();
  }, []);

  const deletedCategoryById = (id) => {
    console.log(id);
    axios.delete(`https://localhost:44393/api/Categories/${id}`).then((res) => {
      alert("Delete succesful!");
      return getList();
    });
  };
  const searchNameCategory = (nameCategory) => {
    axios
      .get(
        `https://localhost:44393/api/Categories?nameSearchCategory=${nameCategory}`
      )
      .then((res) => {
        setCategorys(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <SearchCategory searchNameCategory={searchNameCategory} />
      <div className="card">
        <div className="card-header">
          <h3>List Category</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Id Category</th>
                <th>Name Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {categorys.map((value, key) => {
                return (
                  <tr>
                    <td>{value.idCategory}</td>
                    <td>{value.nameCategory}</td>
                    <td>
                      {" "}
                      <Link
                        className="btn btn-primary"
                        to={`/Category/Edit/${value.idCategory}`}
                      >
                        Edit
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deletedCategoryById(value.idCategory);
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
