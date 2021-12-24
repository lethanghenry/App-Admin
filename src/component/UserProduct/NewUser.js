import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import window from "react-dom";

export default function NewUser() {
  const [post, setPost] = useState([]);
  let { idUser } = useParams();

  //
  const getUserById = (id) => {
    if (id) {
      console.log(id);
      axios
        .get(`https://localhost:44393/api/UserProducts/${id}`)
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
    getUserById(idUser);
  }, []);

  //
  const submit = (e) => {
    e.preventDefault();
    const post = {
      idUser: e.target.idUser.value,
      reviewUser: e.target.reviewUser.value,
      nameUser: e.target.nameUser.value,
      emailUser: e.target.emailUser.value,
    };
    if (idUser) {
      axios
        .put(`https://localhost:44393/api/UserProducts/${idUser}`, post)
        .then((res) => {
          alert("Update Successful");
          setPost(res.data);
          window.location.href = "http://localhost:3000/UserProducts/";
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`https://localhost:44393/api/UserProducts`, post)
        .then((res) => {
          alert("Create Successful");
          window.location.href = "http://localhost:3000/UserProducts/";
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1>New User</h1>
        </div>
        <div className="card-body">
          <form onSubmit>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>id User </label>
                  <br />
                  <input
                    type="text"
                    name="idUser"
                    className="form-control "
                    defaultValue={post ? post.idUser : ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>review User</label>
                  <br />
                  <input
                    type="text"
                    name="reviewUser"
                    defaultValue={post ? post.reviewUser : ""}
                    className="form-control "
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>name User </label>
                  <br />
                  <input
                    type="text"
                    name="nameUser"
                    defaultValue={post ? post.nameUser : ""}
                    className="form-control "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>email User</label>
                  <br />
                  <input
                    type="text"
                    name="emailUser"
                    defaultValue={post ? post.emailUser : ""}
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
