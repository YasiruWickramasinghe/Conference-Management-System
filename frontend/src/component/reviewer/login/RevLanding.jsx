import React, { Component } from "react";
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
  MDBView,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
//import Notification from '../RevNotification';

export default class RevLanding extends Component {
  onSubmit = (e) => {
    this.props.history.push(`/rev/login`);
  };

  onOne = (e) => {
    this.props.history.push(`/example/single`);
  };

  onTwo = (e) => {
    this.props.history.push(`/example/table`);
  };

  onThree = (e) => {
    this.props.history.push(`/rev/login`);
  };
  render() {
    return (
      <div>
        <div
          className="w-100"
          style={{
            backgroundImage: `url("https://media.istockphoto.com/vectors/presentation-of-the-project-business-people-meeting-teamwork-or-man-vector-id1164657384")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <form onSubmit={this.onSubmit}>
              <h1>Landing Page</h1>
              <button className="btn btn-lg btn-primary btn-block">
                Start
              </button>
            </form>

            <form onSubmit={this.onOne}>
              <button className="btn btn-lg btn-success btn-block">
                Single page
              </button>
            </form>

            <form onSubmit={this.onTwo}>
              <button className="btn btn-lg btn-warning btn-block">
                Table page
              </button>
            </form>

            <form onSubmit={this.onThree}>
              <button className="btn btn-lg btn-danger">
                <Notification />
              </button>
            </form>
          </div>
          {/* <div className="container">
                <MDBContainer>
                    <br/>
                    <MDBRow>
                        <MDBCol md="6">
                        <MDBCard
                        className='card-image'
                        style={{
                          backgroundImage:
                            'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)',
                          width: '28rem',
                          backgroundSize: "cover",

                        }}
                        >
                            <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Sign up</p>
                                <div className="grey-text">
                                <MDBInput
                                    label="Your First Name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your Last Name"
                                    icon="user-circle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your Email"
                                    icon="envelope"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />
                                </div>
                                <div className="text-center py-4 mt-3">
                                <button className="btn btn-lg btn-dark btn-block">Register</button>
                                </div>
                                <hr/>
                                <p className="font-small white-text mt-3">
                                    Not a member?
                                    <a
                                    href="#!"
                                    className="dark-black-text ml-1 font-weight-bold"
                                    >
                                    Sign up
                                    </a>
                                </p>
                            </form>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <br/>
                </MDBContainer>
                </div> */}
        </div>
      </div>
    );
  }
}
