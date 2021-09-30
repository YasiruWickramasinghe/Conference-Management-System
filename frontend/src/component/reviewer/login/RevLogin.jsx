import React, { Component } from "react";
import { login } from "./RevFunction";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
} from "mdbreact";
export default class RevLogin extends Component {
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

    const reviewer = {
      email: this.state.email,
      password: this.state.password,
    };
    login(reviewer).then((res) => {
      if (res) {
        this.props.history.push(`/RevStartUp`);
        localStorage.setItem("ReviwerLogin", true);
        location.reload();
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <div
            className="w-100"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/photos/blur-image-of-many-people-are-training-in-the-big-training-room-with-picture-id979027138?k=6&m=979027138&s=170667a&w=0&h=WRLT_d_H8YWO15MuDBK-PlgMzQrWbhNJe--tvGblzYI=")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <MDBContainer>
              <br />
              <center>
                <MDBRow>
                  <MDBCol>
                    <MDBCard
                      className="card-image"
                      style={{
                        backgroundImage:
                          "url(https://image.freepik.com/vector-gratis/fondo-abstracto-agua_114588-238.jpg)",
                        width: "28rem",
                        backgroundSize: "cover",
                      }}
                    >
                      <MDBCardBody>
                        <MDBCardHeader className="form-header winter-neva-gradient rounded">
                          <h3 className="my-3">
                            <MDBIcon icon="lock" /> LogIn
                          </h3>
                        </MDBCardHeader>
                        <form onSubmit={this.onSubmit}>
                          <div className="grey-text">
                            <MDBInput
                              label="Your Email"
                              icon="envelope"
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                            <MDBInput
                              label="Your password"
                              icon="lock"
                              group
                              type="password"
                              validate
                              name="password"
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="text-center py-4 mt-3">
                            <button className="btn btn-lg btn-dark btn-block">
                              Login
                            </button>
                          </div>
                          <hr />
                          <p className="font-small black-text mt-3">
                            Don't have an account?
                            <a
                              href="/rev/register"
                              className="dark-black-text ml-1 font-weight-bold"
                            >
                              Sign Up
                            </a>
                          </p>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </center>
              <br />
              <br />
              <br />
            </MDBContainer>
          </div>
        </div>
      </div>
    );
  }
}
