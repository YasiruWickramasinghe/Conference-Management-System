import React, { Component } from "react";

import RevNewResearchDescription from "./RevNewResearchDescription";
import RevNewResearchTable from "./RevNewResearchTable";

import RevFooter from "../RevFooter";

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

export default class RevNewResearchs extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div className="grey lighten-1">
          <br />
          <RevNewResearchDescription />
          <RevNewResearchTable />
          <RevFooter />
        </div>
      </div>
    );
  }
}
