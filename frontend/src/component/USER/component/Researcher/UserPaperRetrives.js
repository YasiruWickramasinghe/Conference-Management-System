import { withRouter } from "react-router-dom";
import PapersTable from "./PaperRetrieveTable"
import React, { Component } from 'react';
import CoverImage from "../Decorate Component/CoverImage";
import Attention from "../Decorate Component/Attention";
import SocilMedia from "../Decorate Component/SocialMedia";
import { Redirect, withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBView, MDBCardImage,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


class PapersRetrieves extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
<div style={{ marginTop: "3rem" }}>
  <div className="row">
    <CoverImage />
  </div>
  <div className="row">
    <MDBContainer>
      <br />
      <MDBRow>
        <MDBCol md="8">
          <MDBCard
            wide
            cascade
            className="card-image"
            style={{
              backgroundImage:
                "url(https://image.freepik.com/free-vector/white-abstract-background_23-2148882948.jpg)",

              backgroundSize: "cover",
            }}
          >
            <MDBCardBody cascade>
              <MDBRow>
                <MDBCol md="20">
                  <PapersTable/>
                </MDBCol>
              </MDBRow>
              <br />
              <br />
              <br />
              <br />
              <br />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4">
          <MDBRow>
            <Attention />
          </MDBRow>
          <br />
          <MDBRow>
            <SocilMedia />
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
  </div>
</div>
</div>
         );
    }
}
 
export default withRouter(PapersRetrieves);