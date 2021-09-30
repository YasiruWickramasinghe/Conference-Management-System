import React, { Component } from 'react';
import axios from 'axios';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBView ,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class RevHomeLatestReview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            papers:[],
            workshops:[]
        }
    }

    componentDidMount(){
        this.retrevePapers();
    }

    retrevePapers(){
        axios.get("http://localhost:8000/rev/researchpaper/last/_id").then(res =>{

            if(res.data.success){
                this.setState({
                    papers:res.data.existingPapers
                });

                console.log(this.state.papers)
            }

        });

        axios.get("http://localhost:8000/rev/workshopproposal/last/_id").then(res =>{

            if(res.data.success){
                this.setState({
                    workshops:res.data.existingWorkshops
                });

                console.log(this.state.workshops)
            }

        });
    }

    render() {
       
        return (
            <div>
                    <div className="row row-cols-1 row-cols-md-2">
                    <div className="col-6">
                    <MDBCard wide cascade
                        
                                
                                className='card-image'
                                    style={{
                                    backgroundImage:
                                        'url(https://image.freepik.com/free-vector/white-abstract-background_23-2148882948.jpg)',
                                    width:"100vh",
                                    backgroundSize: "cover",
            
                                    }}
                                >
                                    {this.state.papers.map((papers) =>(
                                <MDBCardBody cascade >

                                <MDBRow>
                                    <MDBCol md='8'>
                                    <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                        <th>
                                            <h3 className="text-center font-weight-bold">{papers.mTitle}</h3>
                                        </th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>                      
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Author
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {papers.author}
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Abstract
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {papers.abstract}
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Category
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {papers.category}
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Keyword
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {papers.keyword}
                                        </tr>
                                    </MDBTableBody>
                                    </MDBTable>
                                    </MDBCol>
                                <MDBCol md='4'>
                                <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                        <th className='font-weight-bold'>Contact Details</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>                      
                                        <tr>
                                            <td> 
                                                <p>
                                                    <MDBIcon icon='user' /> {papers.first_name} {papers.last_name}
                                                </p>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <p>
                                                    <MDBIcon icon='envelope' /> {papers.userId}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    <MDBIcon icon='phone' /> {papers.con_number}
                                                </p>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                    </MDBTable>
                                    <MDBCardHeader className="form-header blue-grey rounded">
                                        <h3 className="my-3 black-text">
                                        <MDBIcon icon="file-alt" /> {papers.status}
                                        </h3>
                                    </MDBCardHeader>
                                </MDBCol>
                                </MDBRow>
                                </MDBCardBody>
                                ))}
                                </MDBCard>
                    </div> 
                    <div className="col-6">
                                                                
                    <MDBCard wide cascade
                                
                                className='card-image'
                                    style={{
                                    backgroundImage:
                                        'url(https://image.freepik.com/free-vector/white-abstract-background_23-2148882948.jpg)',
                                    width:"100vh",
                                    backgroundSize: "cover",
            
                                    }}
                                >
                    {this.state.workshops.map((workshops) =>(
                                <MDBCardBody cascade >

                                <MDBRow>
                                    <MDBCol md='8'>
                                    <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                        <th>
                                            <h3 className="text-center font-weight-bold">{workshops.wTitle}</h3>
                                        </th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>                      
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Presenter
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {workshops.pName}
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Category
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {workshops.category}
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> WorkShop Goal
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {workshops.wGoal}
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td> 
                                                <h5 className='font-weight-bold'>
                                                    <MDBIcon icon='hand-point-right fa-lg' /> Audiance
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                        {workshops.tAudience}
                                        </tr>
                                    </MDBTableBody>
                                    </MDBTable>
                                    </MDBCol>
                                <MDBCol md='4'>
                                <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                        <th className='font-weight-bold'>Contact Details</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>                      
                                        <tr>
                                            <td> 
                                                <p>
                                                    <MDBIcon icon='user' /> {workshops.first_name} {workshops.last_name}
                                                </p>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <p>
                                                    <MDBIcon icon='envelope' /> {workshops.userId}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    <MDBIcon icon='phone' /> {workshops.con_number}
                                                </p>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                    </MDBTable>
                                    <MDBCardHeader className="form-header blue-grey rounded">
                                        <h3 className="my-3 black-text">
                                        <MDBIcon icon="file-alt" /> {workshops.status}
                                        </h3>
                                    </MDBCardHeader>
                                </MDBCol>
                                </MDBRow>
                                </MDBCardBody>
                                ))}
                                </MDBCard>
                    </div>
                </div>
            </div>   
        )
    }
}
