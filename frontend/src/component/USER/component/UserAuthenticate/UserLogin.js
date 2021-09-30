import React, { Component } from "react";
import { login } from "./UserFunction";
import { MDBInput } from "mdbreact";
import { withRouter } from "react-router-dom";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then((res) => {
      if (res) {
        if (res == "Workshop Presenter") {
          this.props.history.push(`/workshop/workshopdashboard`);
          location.reload();
        } else if (res == "Researcher") {
          this.props.history.push(`/user/userDashboard`);
          location.reload();
        }
        {
        }
      }
    });
  };

  render() {
    return (
      <div>
        <div className="content" style={{ marginTop: "8rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-5 order-md-2">
                <img
                  src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 contents" style={{ marginTop: "1rem" }}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h2>
                        Sign In to <strong>CMS</strong>
                      </h2>
                      <p className="mb-4">
                        As a user you have many benifits from this service
                      </p>
                    </div>
                    <form onSubmit={this.onSubmit} method="post">
                      <div className="grey-text">
                        <MDBInput
                          label="Type your email"
                          icon="envelope"
                          group
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          validate
                          required
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Type your password"
                          icon="lock"
                          required
                          group
                          type="password"
                          validate
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="d-flex mb-5 align-items-center">
                        <label className="control control--checkbox mb-0">
                          <input type="checkbox" checked="checked" />
                        </label>

                        <span className="caption pl-2">
                          I agree terms and conditions
                        </span>
                        <span className="ml-auto">
                          <a href="/user/userSignup" className="forgot-pass">
                            Register
                          </a>
                        </span>
                      </div>

                      <input
                        type="submit"
                        value="Log In"
                        className="btn text-white btn-block btn-dark"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserLogin);
