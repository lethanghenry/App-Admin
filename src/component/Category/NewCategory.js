import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import window from "react-dom";
export default function NewCategory() {
  const [post, setPost] = useState([]);

  let { idCategory } = useParams();

  //
  const getCategoryById = (id) => {
    if (id) {
      console.log(id);
      axios
        .get(`https://localhost:44393/api/Categories/${id}`)
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
    getCategoryById(idCategory);
  }, []);

  //
  const submit = (e) => {
    e.preventDefault();
    const post = {
      idCategory: e.target.idCategory.value,
      nameCategory: e.target.nameCategory.value,
    };
    if (idCategory) {
      axios
        .put(`https://localhost:44393/api/Categories/${idCategory}`, post, {
          header: {
            "content-type": "application/json",
            "Content-Type": "multipart/form-data",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          alert("Update Successful");
          setPost(res.data);
          window.location.href = "http://localhost:3000/Category/";
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`https://localhost:44393/api/Categories`, post)
        .then((res) => {
          alert("Create Successful");
          window.location.href = "http://localhost:3000/Category/";
        })
        .catch((error) => console.log(error));
    }

    // if (idCategory) {
    //   axios
    //     .put(`https://localhost:44393/api/Categories/${idCategory}`, post)
    //     .then((res) => {
    //       alert("Update Successful");
    //       window.location.href = "http://localhost:3000/Category/";
    //     })
    //     .catch((error) => console.log(error));
    // } else {
    //   axios
    //     .post(`https://localhost:44393/api/Categories`, post)
    //     .then((res) => {
    //       alert("Update Successful!");
    //       window.location.href = "http://localhost:3000/Category/";
    //     })
    //     .catch((error) => console.log(error));
    // }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Id Category </label>
                  <br />
                  <input
                    type="text"
                    name="idCategory"
                    defaultValue={post ? post.idCategory : ""}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Name Category</label>
                  <br />
                  <input
                    type="text"
                    name="nameCategory"
                    defaultValue={post ? post.nameCategory : ""}
                    className="form-control "
                  />
                  <br />
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
