import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import window from "react-dom";
export default function NewProduct() {
  const [post, setPost] = useState([]);

  let { idProduct } = useParams();

  //
  const getProductById = (id) => {
    if (id) {
      console.log(id);
      axios
        .get(`https://localhost:44393/api/Products/${id}`)
        .then((res) => {
          setPost(res.data);
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  //
  useEffect(() => {
    getProductById(idProduct);
  }, []);

  //
  const submit = (e) => {
    e.preventDefault();
    const post = {
      idProduct: e.target.idProduct.value,
      nameProduct: e.target.nameProduct.value,
      rateProduct: e.target.rateProduct.value,
      qualityProduct: e.target.qualityProduct.value,
      weightProduct: e.target.weightProduct.value,
      dimensionsProduct: e.target.dimensionsProduct.value,
      priceProduct: e.target.priceProduct.value,
      discountProduct: e.target.discountProduct.value,
      decriptionProduct: e.target.decriptionProduct.value,
    };
    if (idProduct) {
      axios
        .put(`https://localhost:44393/api/Products/${idProduct}`, post)
        .then((res) => {
          alert("Update Successful");
          setPost(res.data);
          window.location.href = "http://localhost:3000/Product/";
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`https://localhost:44393/api/Products`, post)
        .then((res) => {
          alert("Create Successful");
          window.location.href = "http://localhost:3000/Products/";
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1>New Product</h1>
        </div>
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>id Product </label>
                  <br />
                  <input
                    type="text"
                    name="idProduct"
                    className="form-control "
                    defaultValue={post ? post.idProduct : ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>name Product</label>
                  <br />
                  <input
                    type="text"
                    name="nameProduct"
                    defaultValue={post ? post.nameProduct : ""}
                    className="form-control "
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>rate Product </label>
                  <br />
                  <input
                    type="text"
                    name="rateProduct"
                    defaultValue={post ? post.rateProduct : ""}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>quality Product</label>
                  <br />
                  <input
                    type="text"
                    name="qualityProduct"
                    defaultValue={post ? post.qualityProduct : ""}
                    className="form-control "
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>weight Product </label>
                  <br />
                  <input
                    type="text"
                    name="weightProduct"
                    defaultValue={post ? post.weightProduct : ""}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>dimension Product</label>
                  <br />
                  <input
                    type="text"
                    name="dimensionsProduct"
                    defaultValue={post ? post.dimensionsProduct : ""}
                    className="form-control "
                  />
                  <br />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>price Product </label>
                  <br />
                  <input
                    type="text"
                    name="priceProduct"
                    defaultValue={post ? post.priceProduct : ""}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>discount Product</label>
                  <br />
                  <input
                    type="text"
                    name="discountProduct"
                    defaultValue={post ? post.discountProduct : ""}
                    className="form-control "
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>decription Product </label>
                  <br />
                  <textarea
                    type="text"
                    name="decriptionProduct"
                    defaultValue={post ? post.decriptionProduct : ""}
                    className="form-control "
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group d-flex align-items-center justify-content-center">
              <button className="btn btn-primary m-3" type="submit">
                Submit
              </button>
              <button className="btn btn-success m-3" type="reset">
                Clear
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
