import React, { Component } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  } from "mdbreact";

export default class Attention extends Component {
    render() {
        return (
                 <MDBCard narrow>
                      <MDBCardBody className='elegant-color white-text'>
                        <MDBCardTitle className="font-weight-bold red-text">
                          <center>Attention !</center>
                        </MDBCardTitle>
                        <hr />

                        <MDBCardText>
                          According to the US Copyright Office, copyright
                          applies to original works of creative expression that
                          are captured in a tangible form. The copyright goes to
                          the original creator of the work, who can choose to
                          sell their rights to other parties.
                        </MDBCardText>
                        <hr />
                      </MDBCardBody>
                    </MDBCard>

        )
    }
}
