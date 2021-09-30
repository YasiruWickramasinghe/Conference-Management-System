import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle,MDBCardText} from 'mdbreact';

export default class RevOldResearchTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ReviewedPapers:[]
        }
    }

    componentDidMount(){
        this.retrevePapers();
    }

    retrevePapers(){
        axios.get("http://localhost:8000/rev/researchpaper/reviewed").then(res =>{

            if(res.data.success){
                this.setState({
                    ReviewedPapers:res.data.ReviewedPapers
                });

                console.log(this.state.ReviewedPapers)
            }

        });
    }

        //delete
        onDelete = (id) =>{
            axios.delete(`http://localhost:8000/rev/researchpaper/delete/${id}`).then((res) =>{
              alert("Research Paper Deleted successfully")
              this.retreveUsers();
            })
          }

    //search Bar
    filterData(ReviewedPapers,searchkey){

        const result = ReviewedPapers.filter((reviewedpaper) =>
        
        reviewedpaper.mTitle.toLowerCase().includes(searchkey)||
        reviewedpaper.category.toLowerCase().includes(searchkey)||
        reviewedpaper.status.toLowerCase().includes(searchkey)
      
        )
      
        this.setState({ReviewedPapers:result});
        
      }

    handleSearchArea = (e) =>{
        const searchkey = e.currentTarget.value;
       
        axios.get("http://localhost:8000/rev/researchpaper/reviewed").then(res =>{

            if(res.data.success){
                
                this.filterData(res.data.ReviewedPapers,searchkey)
            }

        });
    }      

    render() {
        const countReviewedPaper = this.state.ReviewedPapers.length;
        return (
            <div>
                <div className="row">
                    <MDBContainer>   
                        <MDBRow>       
                            <MDBCol md='8'>
                            <MDBCard narrow>
                                    <MDBCardBody className="elegant-color-dark">
                                    <div className="row">
                                        <div className="col-lg-5">
                                        <MDBInput 
                                                label="Search"
                                                icon="search"                                             
                                                group
                                                type="search"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="searchQuary"                              
                                                onChange={this.handleSearchArea}
                                            />
                                        </div>
                                    </div>
                                        <div className="container">
                                        <table className="table table-dark table-hover">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Manuscript Title</th>
                                                <th scope="col">Category</th>
                                                {/* <th scope="col">Abstract</th> */}
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.ReviewedPapers.map((ReviewedPapers,index) =>(
                                                <tr key={index}>
                                                    <th scope ="row">{index+1}</th>
                                                    <td>
                                                        <a href = {`/rev/researchpaper/${ReviewedPapers._id}`} style = {{textDecoration:'none', color: 'white'}}>
                                                        {ReviewedPapers.mTitle}
                                                        </a>
                                                    </td>
                                                    <td>{ReviewedPapers.category}</td>
                                                    {/* <td>{ReviewedPapers.abstract}</td>      */}
                                                    <td>{ReviewedPapers.status}</td>                   
                                                    <td>
                                                        <tr>
                                                            <td>
                                                            <a className ="btn btn-dark btn-sm btn-block" href ={`/rev/researchpaper/${ReviewedPapers._id}`}>
                                                            <i></i>&nbsp;View
                                                        </a>
                                                            </td>
                                                            <td>
                                                            <a className ="btn btn-danger btn-sm btn-block" href ="#" onClick={() =>this.onDelete(ReviewedPapers._id)}>
                                                            <i></i>&nbsp;Delete
                                                        </a>
                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        </div>
                                    </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBRow>
                                <MDBCard narrow>
                                <MDBCardBody className="unique-color-dark">
                                    <MDBCardTitle className='font-weight-bold white-text text-center'>
                                         <h1>Old Research Paper</h1>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='red-text text-center red-text'>
                                    <MDBIcon icon='address-book' /> {countReviewedPaper}
                                    </h1>
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
                                    height: '50vh',
                                    backgroundSize: "cover",
            
                                    }}
                                >
                                <MDBCardBody>
                                    <MDBCardTitle className='font-weight-bold'>
                                    Join Our Researcher Community
                                    </MDBCardTitle>
                                    <hr/>
                                    <MDBCardText>
                                    Read before Accept this
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    </MDBCardText>
                                    <hr/>
                                </MDBCardBody>
                                </MDBCard>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    <br/>
                </MDBContainer>
                </div>
        </div>
        )
    }
}
