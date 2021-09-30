import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <React.Fragment>
      <br></br> <br></br> <br></br>
      <div className="Container d-flex justify-content-center row-hl">
        <h1>Select User Type</h1>
      </div>
      <br></br> <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>User</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/user/userLogin" class="btn btn-outline-light btn-sm">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>Admin</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/Admin/Login" class="btn btn-outline-light btn-sm">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>Editor</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/editorlogin" class="btn btn-outline-light btn-sm">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>Reviewer</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/rev/login" class="btn btn-outline-light btn-sm">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginButton;
