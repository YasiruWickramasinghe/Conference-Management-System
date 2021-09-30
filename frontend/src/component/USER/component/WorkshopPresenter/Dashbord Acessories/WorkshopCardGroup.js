import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {MDBCard, MDBCardBody,MDBIcon, MDBView, MDBCardImage,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class WorkshopCount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            UnderProposal:[],
            DeclinedProposal:[],
            AcceptedProposal:[]
            
        }
    }

    componentDidMount(){
        this.retreveunderProposal();
        this.retreveDeclinedProposal();
        this.retreveAcceptedProposal();

    }

    retreveunderProposal(){
        const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/proposal/specproposalun/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          
          this.setState({
            UnderProposal: res.data.existingProposal,
          });
        }
      });
  };

    retreveDeclinedProposal(){
        const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/proposal/specproposalde/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          
          this.setState({
            DeclinedProposal: res.data.existingProposal,
          });
        }
      });
    }

    retreveAcceptedProposal(){
        const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/proposal/specproposalap/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          
          this.setState({
            AcceptedProposal: res.data.existingProposal,
          });
        }
      });
    }



    render() {
    
        return (
            <div className="container">     

                <div className="row">
                <div className="col">
                        <MDBCard >
                                <MDBCardBody className="special-color">
                                    <MDBCardTitle className='font-weight-bold grey-text text-center'>
                                         <h2>Approved Proposals</h2>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='white-text text-center' style={{fontSize:"3rem"}}><b>
                                   {this.state.AcceptedProposal.length}</b>
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className="col">
                        <MDBCard >
                                <MDBCardBody className="special-color">
                                    <MDBCardTitle className='font-weight-bold grey-text text-center'>
                                         <h2>Reviewing Proposals</h2>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='white-text text-center' style={{fontSize:"3rem"}}><b>
                                   {this.state.UnderProposal.length}</b>
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className="col">
                        <MDBCard >
                                <MDBCardBody className="special-color">
                                    <MDBCardTitle className='font-weight-bold grey-text text-center'>
                                         <h2>Declined Proposals</h2>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='white-text text-center' style={{fontSize:"3rem"}}><b>
                                   {this.state.DeclinedProposal.length}</b>
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>

                

    
                </div>
            </div>
        )
    }
}
