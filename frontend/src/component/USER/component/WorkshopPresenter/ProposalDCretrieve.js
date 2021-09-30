import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import CoverImage from "../Decorate Component/CoverImage2";
import SocilMedia from "../Decorate Component/SocialMedia";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle,MDBCardText} from 'mdbreact';


export default class UNProposal extends Component {
  constructor() {
    super();

    this.state = {
      userId:'',
      proposal: [],

    };
  }

  componentDidMount() {

    this.retrieveproposals();
  }

  retrieveproposals = () => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/proposal/specproposalde/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          
          this.setState({
            proposal: res.data.existingProposal,
          });
          console.log(proposal)
          // console.log(this.state.proposal);
        }
      });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:5050/proposal/underPdelete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveproposals();
    });
  };

  filterData(proposal, searchKey) {
    const result = proposal.filter(
      (paper) =>
        paper.wTitle.toLowerCase().includes(searchKey) ||
        // paper.category.toLowerCase().includes(searchKey) ||
        paper.tAudience.toLowerCase().includes(searchKey) ||
         paper.status.toLowerCase().includes(searchKey) ||
        paper.pName.toLowerCase().includes(searchKey)
    );
    this.setState({ proposal: result });
  }

  handleSearchArea = (e) => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    const searchKey = e.currentTarget.value;

    axios.get(`http://localhost:5050/proposal/specproposalde/${decode.email}`).then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingproposal, searchKey);
      }
    });
  };

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
                      <div className="container" style={{ marginTop: "5rem" }}>
        <div class="d-flex">
          <div class="mr-auto p-2"> <h4 style={{fontWeight:"bold"}}>Declined Proposals</h4></div>
          <div class="p-2"><input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input></div>

        </div>

        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Workshop Title</th>
              <th scope="col">Category</th>
              <th scope="col">Presenter</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.proposal.map((proposal, index) => (
              <tr class="table-success" key={index}>
                <th scope="row">{index + 1}</th>

                <td>
                  
                    {proposal.wTitle}
  
                </td>
                <td>{proposal.category}</td>
                <td>{proposal.pName}</td>
                <td>
                  <div className="row">
                  <a
                    className="btn btn-dark btn-sm"
                    href={`/workshop/viewproposal/${proposal._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;View
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger btn-sm mr-3"
                    href="#"
                    onClick={() => this.onDelete(proposal._id)}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
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
                 
                <MDBCard>
          
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
  
            <MDBCardTitle>Declined Proposal</MDBCardTitle>
            <hr className='hr-light' />
            <br/>
            <div className="row"><center>
            <p className="h1" style={{marginLeft:"6rem"}}> <b>{this.state.proposal.length}</b></p>
            </center>
              </div>
          </MDBCardBody>
        </MDBCard>
                 
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
