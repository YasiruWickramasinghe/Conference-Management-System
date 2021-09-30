import React, { Component } from "react";
import CoverImage from '../Decorate Component/CoverImage'
import Attention from '../Decorate Component/Attention'
import SocilMedia from '../Decorate Component/SocialMedia'
import { Redirect, withRouter } from "react-router-dom";
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBTable,
  MDBIcon,
  MDBTableBody,
  MDBTableHead,
  MDBCol,

} from "mdbreact";

class ResearcherMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        paper:{}
     }
}

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5050/rpaper/viewpaper/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                paper:res.data.paper
            });
        }
    })
}

    
  render() {
    const{status,payment,mTitle,category,abstract,keyword,author,photo,userId,first_name,last_name,con_number} = this.state.paper;
    return (
      <div>
        <div style={{marginTop:"3rem"}}>
          <div className="row">

           <CoverImage/>

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
                        <MDBCol md="8">
                          <MDBTable>
                            <MDBTableHead>
                              <tr>
                                <th className="font-weight-bold">
                                  <h3 className="text-center">
                                    Research Details
                                  </h3>
                                </th>
                              </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Title
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                                <h5>{mTitle}</h5>
                              </tr>
                              <br />
                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Author
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                              <h5>{author}</h5>
                              </tr>
                              <br />
                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Abstract
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                              <h5>{abstract}</h5>
                              </tr>
                              <br />
                            
                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Category
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                              <h5>{category}</h5>
                              </tr>
                              <br />
                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Keywords
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                              <h5>{keyword}</h5>
                              </tr>
                              <br/>

                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Payment
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                              <h5>{payment}</h5>
                              </tr>
                              <br />
                              <tr>
                                <td>
                                  <h5 className="font-weight-bold">
                                    <MDBIcon icon="hand-point-right fa-lg" />{" "}
                                    Reviewer Status
                                  </h5>
                                </td>
                              </tr>
                              <tr>
                              <h5>{status}</h5>
                              </tr>
                              <br />
                            </MDBTableBody>
                          </MDBTable>
                        </MDBCol>
                        <MDBCol md="4">
                          <MDBTable>
                            <MDBTableHead>
                              <tr>
                                <th className="font-weight-bold">
                                  Contact Details
                                </th>
                              </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                              <tr>
                                <td>
                                  <p>
                                    <MDBIcon icon="user" /> {first_name} {last_name}
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <p>
                                    <MDBIcon icon="envelope" /> {userId}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    <MDBIcon icon="phone" />{con_number}
                                  </p>
                                </td>
                              </tr>
                            </MDBTableBody>
                          </MDBTable>
                          <br/><br/>
                          <MDBCardHeader className="form-header red rounded">
                            <a href={photo} className="my-3 white-text"><center>
                              <MDBIcon icon="file-alt white-text" size="2x" /><br/> View PDF
                            </center></a>
                          </MDBCardHeader>


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
                   <Attention/>
                  </MDBRow>
                  <br />
                  <MDBRow>
                    
                    <SocilMedia/>

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

export default withRouter(ResearcherMainPage);