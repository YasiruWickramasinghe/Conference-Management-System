import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

const profile = () => {
  const [profile, setprofile] = useState({});

  const history = useHistory();

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/admins/${localStorage.getItem("AdminIsID")}`
      );
      setprofile(data);
      console.log(data);
    };
    sendRequest();
  }, []);

  function Logout() {
    localStorage.removeItem("AdminIsLoggedIn");
    history.push("/");
    location.reload();
  }

  function EditProflie() {
    history.push("/Admin/Proflie/Edit");
  }

  return (
    <React.Fragment>
      <header id="main-header" class="py-2 bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>
                <i class="fas fa-user"></i> Admin Profile
              </h1>
            </div>
          </div>
        </div>
      </header>
      <br></br>
      <section id="profile">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  <h4>Profile</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={profile.name}
                        readOnly
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value={profile.email}
                        readOnly
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h3>Hello {profile.name}</h3>
              <img
                src={require("url:./img/avatar.png")}
                alt=""
                class="d-block img-fluid mb-3"
              />
              <button class="btn btn-primary btn-block" onClick={EditProflie}>
                Edit Profile
              </button>
              <button class="btn btn-danger btn-block" onClick={Logout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default profile;
