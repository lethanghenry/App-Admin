import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchProduct from "./SearchProduct";
export default function ListProduct() {
  const [products, setProducts] = useState([]);

  // Show all list Category
  const getList = () => {
    axios
      .get(`https://localhost:44393/api/Products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };

  // Call api get
  useEffect(() => {
    getList();
  }, []);

  const deletedProductById = (id) => {
    console.log(id);
    axios.delete(`https://localhost:44393/api/Products/${id}`).then((res) => {
      alert("Delete succesful!");
      return getList();
    });
  };
  const searchNameProduct = (nameProduct) => {
    axios
      .get(
        `https://localhost:44393/api/Products?nameSearchProduct=${nameProduct}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <SearchProduct searchNameProduct={searchNameProduct} />
      <div className="card">
        <div className="card-header">
          <h3>List Product</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>id Product</th>
                <th>name Product</th>
                <th>price Product</th>
                <th>discount Product</th>
                <th>weight Product</th>
                <th>rate Product</th>
                <th>quality Product</th>
                <th>picture Product</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((value, key) => {
                return (
                  <tr>
                    <td>{value.idProduct}</td>
                    <td>{value.nameProduct}</td>
                    <td>{value.priceProduct}</td>
                    <td>{value.discountProduct}</td>
                    <td>{value.weightProduct}</td>
                    <td>{value.rateProduct}</td>
                    <td>{value.qualityProduct}</td>
                    <td>{value.pictureProduct}</td>

                    <td>
                      {" "}
                      <Link
                        className="btn btn-primary"
                        to={`/Product/Edit/${value.idProduct}`}
                      >
                        Edit
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deletedProductById(value.idProduct);
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
