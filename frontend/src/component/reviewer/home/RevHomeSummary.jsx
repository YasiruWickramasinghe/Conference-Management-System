import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBView, MDBCardImage,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class RevHomeSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Underpapers:[],
            ReviewedPapers:[],
            Underworkshops:[],
            Reviewedworkshops:[]
            
        }
    }

    componentDidMount(){
        this.retreveReviewedPapers();
        this.retreveUnderReviewedPapers();
        this.retreveReviewedWorkshops();
        this.retreveUndrReviewedWorkshops();
    }

    retreveReviewedPapers(){
        axios.get("http://localhost:8000/rev/researchpaper/reviewed").then(res =>{
            if(res.data.success){
                this.setState({
                    ReviewedPapers:res.data.ReviewedPapers
                });
            }

        });
    }

    retreveUnderReviewedPapers(){
        axios.get("http://localhost:8000/rev/researchpaper/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underpapers:res.data.Underpapers
                });
            }

        });
    }

    retreveUndrReviewedWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underworkshops:res.data.Underworkshops
                });
            }

        });
    }

    retreveReviewedWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/reviewed").then(res =>{

            if(res.data.success){
                this.setState({
                    Reviewedworkshops:res.data.Reviewedworkshops
                });
            }

        });
    }

    render() {
        const countUnderReviewedPaper = this.state.Underpapers.length;
        const countReviewedPaper = this.state.ReviewedPapers.length;
        const countUnderReviewedWorkshop = this.state.Underworkshops.length;
        const countReviewedWorkshop = this.state.Reviewedworkshops.length;
        return (
            <div className="container">     
                <div className="row row-cols-1 row-cols-md-4">
                    <div className="col">
                        <MDBCard narrow>
                                <MDBCardBody className="unique-color-dark">
                                    <MDBCardTitle className='font-weight-bold dark-text text-center'>
                                         <h3 className="white-text">New Research Paper</h3>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='red-text text-center'>
                                    <MDBIcon icon='address-book' /> {countUnderReviewedPaper}
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col">
                    <MDBCard narrow>
                                <MDBCardBody className="unique-color-dark">
                                    <MDBCardTitle className='font-weight-bold dark-text text-center'>
                                         <h3 className="white-text">New Workshop Proposal</h3>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='red-text text-center'>
                                    <MDBIcon icon='address-book' /> {countUnderReviewedWorkshop}
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col">
                    <MDBCard narrow>
                                <MDBCardBody className="unique-color-dark">
                                    <MDBCardTitle className='font-weight-bold dark-text text-center'>
                                         <h3 className="white-text">Old Research Paper</h3>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='red-text text-center'>
                                    <MDBIcon icon='address-book' /> {countReviewedPaper}
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col">
                    <MDBCard narrow>
                                <MDBCardBody className="unique-color-dark">
                                    <MDBCardTitle className='font-weight-bold dark-text text-center'>
                                         <h3 className="white-text">Old Workshop proposal</h3>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='red-text text-center'>
                                    <MDBIcon icon='address-book' /> {countReviewedWorkshop}
                                    </h1>
                                </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
        )
    }
}
