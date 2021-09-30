import React, { Component } from 'react'
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardTitle,
    MDBCardText,
  } from "mdbreact";

export default class SocialMedia extends Component {
    render() {
        return (
            <MDBCard
            narrow
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
              width: "28rem",
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <MDBCardBody>
              <MDBCardTitle className="font-weight-bold">
                Join Our Researcher Community
              </MDBCardTitle>
              <hr />
              <MDBCardText>
                Read before Accept this Sed ut perspiciatis unde omnis
                iste natus sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam.
              </MDBCardText>
              <hr />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <MDBCol
                md="12"
                className="d-flex justify-content-center"
              >
                <a href="!#" className="px-3 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" size="2x"  className="white-text pr-3"></MDBIcon>
                </a>

                <a href="!#" className="px-3 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" size="2x"  className="white-text pr-3"></MDBIcon>
                </a>

                <a href="!#" className="px-3- fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f " size="2x" className="white-text pr-3"></MDBIcon>
                </a>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>                
       
        )
    }
}
