import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { MDBCard, MDBCardBody } from "mdbreact";

class RpaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mTitle: "",
      category: "",
      username: "",
      first_name:"",
      last_name:"",
      con_number:"",
      payment: "Paid",
      cnum: "",
            cvc: "",
            mm:"",
            yy:""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const {payment} = this.state;

    const data = {
      payment:payment
    };
     
    if(this.state.cnum==="42424242424242" && this.state.mm=="01" && this.state.yy=="21" && this.state.cvc=="123"){
      
      console.log(this.state.payment)
    axios
      .put(
        `http://localhost:5050/rpaper/paymentforresearch/${id}`,
        data
      )
      .then((res) => {
        if (res.data.success) {
          alert("Paid successfully");
          this.setState({
            mTitle: "",
            category: "",
            author: "",
            cnum: "",
            cvc: "",
            mm:"",
            yy:""
          });
          this.props.history.push(`/user/allApprovedPapers`);
        }
      });
    }
    else{
      alert("Please Enter Valid Card Details");
      this.setState({
        mTitle: "",
        category: "",
        author: "",
        cnum: "",
        cvc: "",
        mm:"",
        yy:""
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    this.setState({ first_name: decode.first_name });
    this.setState({ last_name: decode.last_name });
    this.setState({ con_number: decode.con_number });
    axios
      .get(`http://localhost:5050/rpaper/getspecificpaper/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            mTitle: res.data.post.mTitle,
            category: res.data.post.category,
          });
        }
      });
  }

  render() {
    return (
      <div style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/1393241.jpg")`,
          bacgroundPosition: "center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
     }}>
      <div className="container pb-4">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6" style={{ marginTop: "6rem" }}>
            <MDBCard>
              <div
                className="header pt-3 default-color"
                style={{ textAlign: "center" }}
              >
                <h2 style={{ fontWeight: "bold", color: "white" }}>
                  Secure Payment
                </h2>
              </div>
              <MDBCardBody>
                <form onSubmit={this.onSubmit}>
                  <div className="row p-2" style={{ alignContent: "center" }}>
                    <h5
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                      className="ml-4"
                    >
                      Title :
                    </h5>
                    <h5 style={{ fontFamily: "sans-serif" }} className="ml-2">
                      {this.state.mTitle}{" "}
                    </h5>
                  </div>

                  <div className="row p-2" style={{ alignContent: "center" }}>
                    <h5
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                      className="ml-4"
                    >
                      Category :
                    </h5>
                    <h5 style={{ fontFamily: "sans-serif" }} className="ml-2">
                      {this.state.category}
                    </h5>
                  </div>

                  <div className="row p-2" style={{ alignContent: "center" }}>
                    <h5
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                      className="ml-4"
                    >
                      Current User :
                    </h5>
                    <h5 style={{ fontFamily: "sans-serif" }} className="ml-2">
                      {this.state.first_name} {this.state.last_name}{" "}
                    </h5>
                  </div>

                  <div className="row p-2" style={{ alignContent: "center" }}>
                    <h5
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                      className="ml-4"
                    >
                      Contact Number :
                    </h5>
                    <h5 style={{ fontFamily: "sans-serif" }} className="ml-2">
                      {this.state.con_number}
                    </h5>
                  </div>

                  <br />

                  <div class="form-group">
                    <label
                      for="cardNumber"
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      CARD NUMBER
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="cnum"
                        value={this.state.cnum}
                        onChange={this.handleInputChange}
                        id="cardNumber"
                        placeholder="Valid Card Number"
                        required
                        autofocus
                      />
                      <span class="input-group-addon">
                        <span class="glyphicon glyphicon-lock"></span>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xs-7 col-md-7">
                      <div class="form-group">
                        <label
                          for="expityMonth"
                          style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                          }}
                        >
                          EXPIRY DATE
                        </label>
                        <div className="row">
                          <div class="col-xs-6 col-lg-6 pl-ziro">
                            <input
                              type="text"
                              class="form-control"
                              name="mm"
                              value={this.state.mm}
                              onChange={this.handleInputChange}
                              id="expityMonth"
                              placeholder="MM"
                              required
                            />
                          </div>
                          <div class="col-xs-6 col-lg-6 pl-ziro">
                            <input
                              type="text"
                              class="form-control"
                              id="expityYear"
                              name="yy"
                              value={this.state.yy}
                              onChange={this.handleInputChange}
                              placeholder="YY"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-5 col-md-5 pull-right">
                      <div class="form-group">
                        <label
                          for="cvCode"
                          style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                          }}
                        >
                          CV CODE
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="cvCode"
                          name="cvc"
                          value={this.state.cvc}
                          onChange={this.handleInputChange}
                          placeholder="CV"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary">Pay Here</button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(RpaymentForm);
