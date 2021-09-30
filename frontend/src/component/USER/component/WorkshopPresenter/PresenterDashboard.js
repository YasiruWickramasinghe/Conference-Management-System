import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import CardCountGroup from "./Dashbord Acessories/WorkshopCardGroup";
import Description1 from "./Dashbord Acessories/DescriptionRpaper1";
import Description2 from "./Dashbord Acessories/DescriptionRpaper2";
import { MDBJumbotron, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

export default class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      con_number: "",
      register_fee: "",
      position: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    // console.log(jwt_decode(token));
    this.setState({
      first_name: decode.first_name,
      last_name: decode.last_name,
      con_number: decode.con_number,
      register_fee: decode.register_fee,
      position: decode.position,
      email: decode.email,
    });
  }

  render() {
    return (
      <div>
        <MDBJumbotron style={{ padding: 0 }}>
          <MDBCol
            className="text-white text-center py-5 px-4"
            style={{
              backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)`,
              display: "flex",
              height: "42rem",
            }}
          >
            <MDBCol className="py-5">
              <MDBCardTitle
                className="p-responsive pt-3 m-5 font-bold"
                style={{ fontSize: "3rem", textTransform: "capitalize" }}
              >
                <strong>
                  Hi {this.state.first_name} Share your experience as the{" "}
                  {this.state.position}
                </strong>
              </MDBCardTitle>
              <h6 style={{ color: "GrayText" }} className="mx-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                officia accusamus minus error nisi architecto nulla ipsum
                dignissimos. Odit sed qui, dolorum!
              </h6>
              <a
                href="/workshop/workshopInsert"
                outline
                color="white"
                className="btn btn-lg btn-dark"
              >
                <MDBIcon icon="clone" className="mr-2"></MDBIcon> GET START
              </a>
            </MDBCol>
          </MDBCol>
        </MDBJumbotron>
        <br/>
        <div>
        <Description1/>
        </div>
        <br/><br/>
        <div className="container">
          <h3 style={{fontWeight:"3rem"}}>Workshop Proposal Results</h3><br/>
        <CardCountGroup />
        </div>
        <br/><br/>
        <Description2/>

      </div>
    );
  }
}
