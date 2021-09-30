import React, { Component } from "react";
import { register } from "./UserFunction";
import {withRouter} from 'react-router-dom'


class UserSignup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      con_number: "",
      register_fee: "",
      position: "Researcher",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    

    console.log(this.state.position)
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      con_number: this.state.con_number,
      register_fee: this.state.register_fee,
      position: this.state.position,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

    register(user).then((res) => {
      if (res) {
        this.props.history.push(`/user/userLogin`);
      }
    });
  }

  render() {
    return (
      <div class="container" style={{marginTop:"auto"}}>
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://image.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg"
              alt="image"
              class="img-fluid mb-3 d-none d-md-block"
            />
            <h3><b>Create an Account</b></h3>
            <p class="font-italic text-muted mb-0">
              Create a Account and Share your experience with us
            </p>
            <p class="font-italic text-muted">
              Snippet By{" "}
              <a href="https://bootstrapious.com" class="text-muted">
                <u>Bootstrapious</u>
              </a>
            </p>
          </div>

          <div class="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={this.onSubmit}>
              <center><strong><h2 className="mb-5" style={{marginTop:"2rem"}}>Sign Up</h2></strong></center>
              <div class="row">
                <div className="row">
                  <div className="col-lg-6">
                    <div class="input-group col-lg-135 ml-3 ">
                      <div class="input-group-prepend">
                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                          <i class="fa fa-user text-muted"></i>
                        </span>
                      </div>
                      <input
                        id="firstName"
                        type="text"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                        required
                        placeholder="First Name"
                        class="form-control bg-white border-left-0 border-md"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="input-group col-lg-135 mb-4" style={{width:"15.5rem"}}>
                      <div class="input-group-prepend">
                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                          <i class="fa fa-user text-muted"></i>
                        </span>
                      </div>
                      <input
                        id="lastName"
                        type="text"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        placeholder="Last Name"
                        required
                        class="form-control bg-white border-left-0 border-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                    required
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>

                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="countryCode"
                    name="phone"
                    style={{ maxWidth: "80px" }}
                    class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                  >
                    <option value="">+94</option>
                    <option value="">+10</option>
                    <option value="">+15</option>
                    <option value="">+18</option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="con_number"
                    value={this.state.con_number}
                    onChange={this.onChange}
                    placeholder="Phone Number"
                    required
                    class="form-control bg-white border-md border-left-0 pl-3"
                  />
                </div>

                <div class="input-group col-lg-12 mb-4">
                 <div onChange={this.onChange}>
                <div class="form-check form-check-inline" onChange={this.onChange}>
  <input class="form-check-input" type="radio" name="position" id="inlineRadio1" defaultChecked={this.state.position} value="Researcher"/>
  <label class="form-check-label" for="inlineRadio1">Researcher</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="position" id="inlineRadio2" value="Workshop Presenter"/>
  <label class="form-check-label" for="inlineRadio2">Workshop Presenter</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="position" id="inlineRadio3" value="Attandee"/>
  <label class="form-check-label" for="inlineRadio2">Attandee</label>
</div></div>
                </div>

                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder="Password"
                    required
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>

            

                <div class="form-group col-lg-12 d-flex justify-content-center mx-auto mb-0">
                  <button class="btn btn-dark btn-lg py-3 font-weight-bold" type="submit">
                      Create your account
                  </button>
                </div>

                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span class="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>

                <div class="text-center w-100">
                  <p class="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <a href="/user/userLogin" class="text-primary ml-2">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserSignup);