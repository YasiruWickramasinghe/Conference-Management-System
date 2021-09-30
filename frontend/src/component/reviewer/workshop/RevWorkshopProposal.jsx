import React, { Component } from 'react';
import axios from 'axios';

import RevFooter from '../RevFooter';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBView ,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class RevWorkshopProposal extends Component {

    constructor(props){
        super(props);
 
        this.state={
            workshop:{}
        };
    }
 
    componentDidMount(){
 
     const id = this.props.match.params.id;
 
     axios.get(`http://localhost:8000/rev/workshopproposal/${id}`).then((res) =>{
         if(res.data.success){
             this.setState({
                workshop:res.data.workshop
             });
 
             console.log(this.state.workshop);
         }
     });
    }

    render() {
        const {wTitle,category,userId,photo,status,date,wGoal,tAudiance,pName,first_name,last_name,con_number} = this.state.workshop;
        return (  
            <div> 
       
                 <div className="grey lighten-1">
                    <div className="row">
                    <div className="w-100"
      
                        style={{ 
                            backgroundImage: `url("https://image.freepik.com/free-photo/closeup-pen-blur-background_1421-547.jpg")` ,
                            backgroundPosition: "center",
                            height : "60vh",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",                   
                        }}
                    >
                        <div className="container">
                        <h3 className="blue-text text-right">
                            <br/>
                            <MDBIcon icon='calendar-alt' /> {date}
                        </h3>
                        <br/>
                            <center>
                            <br/><br/><br/>
                                <h1 className="black-text font-italic font-weight-bold">{wTitle}</h1>
                            </center>
                        </div>
                    </div>

                    </div>
                    <div className="row">
                    <MDBContainer>
                    <br/>
                        <MDBRow>
                            <MDBCol md='8'>
                                
                                <MDBCard wide cascade
                                
                                className='card-image'
                                    style={{
                                    backgroundImage:
                                        'url(https://image.freepik.com/free-vector/white-abstract-background_23-2148882948.jpg)',
                                    
                                    backgroundSize: "cover",
            
                                    }}
                                >
                                <MDBCardBody cascade >

                                <MDBRow>
                                    <MDBCol md='8'>
                                    <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                        <th className='font-weight-bold'>
                                            <h3 className="text-center">Workshop Details</h3>
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
                                        {pName}
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
                                        {category}
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
                                        {wGoal}
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
                                        {tAudiance}
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
                                                    <MDBIcon icon='user' /> {first_name} {last_name}
                                                </p>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <p>
                                                    <MDBIcon icon='envelope' /> {userId}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    <MDBIcon icon='phone' /> {con_number}
                                                </p>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                    </MDBTable>
                                    <MDBCardHeader className="form-header blue-grey rounded">
                                        <h3 className="my-3 black-text">
                                        <MDBIcon icon="file-alt" /> {status}
                                        </h3>
                                    </MDBCardHeader>
                                </MDBCol>
                                </MDBRow>
                                <br/><br/><br/><br/><br/>
                                </MDBCardBody>
                                </MDBCard>
                                
                            </MDBCol>

                            <MDBCol md='4'>
                                <MDBRow>
                                <MDBCard narrow>
                                <MDBCardBody className="winter-neva-gradient">
                                    <MDBCardTitle className='font-weight-bold red-text'>
                                    Attention !
                                    </MDBCardTitle>
                                    <hr/>

                                    <MDBCardText>
                                    According to the US Copyright Office, copyright applies to original works of creative expression that are captured in a tangible form. The copyright goes to the original creator of the work, who can choose to sell their rights to other parties.
                                    </MDBCardText>
                                    <hr/>
                                    <a className='pink-text' href={photo}>
                                    <MDBIcon icon='file-download' /> DOWNLOAD WORKSHOP PROPOSAL
                                    </a>
                                </MDBCardBody>
                                </MDBCard>
                                </MDBRow>
                                <br/>
                                <MDBRow>
                                <MDBCard narrow
                                    className='card-image'
                                    style={{
                                    backgroundImage:
                                        'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)',
                                    width: '28rem',
                                    height: '100vh',
                                    backgroundSize: "cover",
            
                                    }}
                                >
                                <MDBCardBody>
                                    <MDBCardTitle className='font-weight-bold'>
                                    Join Our Workshop Community
                                    </MDBCardTitle>
                                    <hr/>
                                    <MDBCardText>
                                    Read before Accept this
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    </MDBCardText>
                                    <hr/>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                                    <MDBCol md='12' className='d-flex justify-content-center'>
                                    <a href='!#' className='px-2 fa-lg li-ic'>
                                        <MDBIcon fab icon='linkedin-in'></MDBIcon>
                                    </a>

                                    <a href='!#' className='px-2 fa-lg tw-ic'>
                                        <MDBIcon fab icon='twitter'></MDBIcon>
                                    </a>

                                    <a href='!#' className='px-2 fa-lg fb-ic'>
                                        <MDBIcon fab icon='facebook-f'></MDBIcon>
                                    </a>
                                    </MDBCol>

                                </MDBCardBody>
                                </MDBCard>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    <br/>
                </MDBContainer>
                </div>
                </div>
                 <RevFooter/>
            </div>      
        )
    }
}

export default RevWorkshopProposal;

