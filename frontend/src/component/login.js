import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [login, setlogin] = useState();

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    Login();
  }

  function Login() {
    axios
      .post("http://localhost:5000/api/admins/login/", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          setlogin(res);
          localStorage.setItem("AdminIsLoggedIn", true);
          localStorage.setItem("AdminIsID", res.data._id);
          localStorage.setItem("AdminName", res.data.name);
          localStorage.setItem("AdminEmail", res.data.email);

          history.push(`/Admin/Proflie/`);
          location.reload();
        } else {
          alert("Login failed please try again");
        }

        setlogin(res);
      });
  }

  console.log(login);
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center row-hl">
        <div className="col-lg-6 ">
          <div className="card bg-dark text-light card-form">
            <div class="card-body">
              <div class="text-center ">
                <h3>Login</h3>
                <p>Please fill out this form to login</p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    id="Email"
                    placeholder="Enter name"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="name"
                    placeholder="Enter password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="form-control primary" type="submit">
                    Login
                  </button>
                </div>
                <div className="form-group">
                  <Link to="Register">
                    <button className="form-control " type="button">
                      Register
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default login;
