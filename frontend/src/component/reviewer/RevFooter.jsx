import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBView, MDBCardImage,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class RevFooter extends Component {
    render() {
        return (
            <div>
                <br/>
                        <MDBRow>
                            <MDBCol>
                            <MDBCard narrow>
                                <MDBCardBody className="special-color-dark">
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
                                    <div className="footer-copyright text-center py-3 white-text">
                                        <MDBContainer fluid>
                                        <p>
                                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Conference.com </a>
                                        </p>
                                        </MDBContainer>
                                    </div>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>    
            </div>
        )
    }
}
