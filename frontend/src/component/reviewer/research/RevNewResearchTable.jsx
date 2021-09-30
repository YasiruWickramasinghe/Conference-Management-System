import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBIcon, MDBView, MDBCardImage,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


export default class RevNewResearchTable extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Underpapers:[]
        }
    }

    componentDidMount(){
        this.retrevePapers();
    }

    retrevePapers(){
        axios.get("http://localhost:8000/rev/researchpaper/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underpapers:res.data.Underpapers
                });

                console.log(this.state.Underpapers)
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
    filterData(Underpapers,searchkey){

        const result = Underpapers.filter((underpaper) =>
        
        underpaper.mTitle.toLowerCase().includes(searchkey)||
        underpaper.category.toLowerCase().includes(searchkey)||
        underpaper.status.toLowerCase().includes(searchkey)
      
        )
      
        this.setState({Underpapers:result});
        
      }

    handleSearchArea = (e) =>{
        const searchkey = e.currentTarget.value;
       
        axios.get("http://localhost:8000/rev/researchpaper/underreview").then(res =>{

            if(res.data.success){
                
                this.filterData(res.data.Underpapers,searchkey)
            }

        });
    }

    render() {
        const countUnderReviewedPaper = this.state.Underpapers.length;
        return (
            <div>
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
                                            {this.state.Underpapers.map((Underpapers,index) =>(
                                                <tr key={index}>
                                                    <th scope ="row">{index+1}</th>
                                                    <td>
                                                        <a href = {`/rev/researchpaper/${Underpapers._id}`} style = {{textDecoration:'none', color: 'white'}}>
                                                        {Underpapers.mTitle}
                                                        </a>
                                                    </td>
                                                    <td>{Underpapers.category}</td>
                                                    {/* <td>{Underpapers.abstract}</td>      */}
                                                    <td>{Underpapers.status}</td>                   
                                                    <td>
                                                        <tr>
                                                            <td>
                                                            <a className ="btn btn-dark btn-sm btn-block" href ={`/rev/researchpaper/update/${Underpapers._id}`}>
                                                            <i></i>&nbsp;View
                                                        </a>
                                                            </td>
                                                            <td>
                                                            <a className ="btn btn-danger btn-sm btn-block" href ="#" onClick={() =>this.onDelete(Underpapers._id)}>
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
                                    <center>
                                <MDBCard narrow>
                                <MDBCardBody className="unique-color-dark">
                                    <MDBCardTitle className='font-weight-bold white-text text-center'>
                                         <h1>New Research Papers</h1>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='red-text text-center'>
                                    <MDBIcon icon='address-book' /> {countUnderReviewedPaper}
                                    </h1>
                                </MDBCardBody>
                                </MDBCard>
                                </center>
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
            </div>
        )
    }
}
