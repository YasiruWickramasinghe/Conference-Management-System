import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBView, MDBCardImage,MDBCardTitle,MDBCardText, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class RevNewWorkshopTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Underworkshops:[]
        }
    }

    componentDidMount(){
        this.retreveWorkshops();
    }

    retreveWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underworkshops:res.data.Underworkshops
                });

                console.log(this.state.Underworkshops)
            }

        });
    }

        //delete
        onDelete = (id) =>{
            axios.delete(`http://localhost:8000/rev/workshopproposal/delete/${id}`).then((res) =>{
              alert("Workshop Proposal Deleted successfully")
              this.retreveUsers();
            })
          }
    
    //search Bar
    filterData(Underworkshops,searchkey){

        const result = Underworkshops.filter((underproposal) =>
        
        underproposal.wTitle.toLowerCase().includes(searchkey)||
        underproposal.category.toLowerCase().includes(searchkey)||
        underproposal.status.toLowerCase().includes(searchkey)
      
        )
      
        this.setState({Underworkshops:result});
        
      }

    handleSearchArea = (e) =>{
        const searchkey = e.currentTarget.value;
       
        axios.get("http://localhost:8000/rev/workshopproposal/underreview").then(res =>{

            if(res.data.success){
                
                this.filterData(res.data.Underworkshops,searchkey)
            }

        });
    }

    render() {
        const countUnderReviewedWorkshop = this.state.Underworkshops.length;
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
                                                <th scope="col">Workshop Title</th>
                                                <th scope="col">Category</th>
                                                {/* <th scope="col">Goal</th> */}
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.Underworkshops.map((Underworkshops,index) =>(
                                                <tr key={index}>
                                                    <th scope ="row">{index+1}</th>
                                                    <td>
                                                        <a href = {`/rev/workshopproposal/${Underworkshops._id}`} style = {{textDecoration:'none', color: 'white'}}>
                                                        {Underworkshops.wTitle}
                                                        </a>
                                                    </td>
                                                    <td>{Underworkshops.category}</td>
                                                    {/* <td>{Underworkshops.wGoal}</td>      */}
                                                    <td>{Underworkshops.status}</td>                   
                                                    <td>
                                                        <tr>
                                                            <td>
                                                            <a className ="btn btn-dark btn-sm btn-block" href ={`/rev/workshopproposal/update/${Underworkshops._id}`}>
                                                            <i></i>&nbsp;View
                                                        </a>
                                                            </td>
                                                            <td>
                                                            <a className ="btn btn-danger btn-sm btn-block" href ="#" onClick={() =>this.onDelete(Underworkshops._id)}>
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
                                         <h1>Old Workshop Proposal</h1>
                                    </MDBCardTitle>
                                    <hr/>
                                    <h1 className='text-center red-text'>
                                    <MDBIcon icon='address-book' /> {countUnderReviewedWorkshop}
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
                                    Join Our Workshop Community
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
                </MDBContainer>
                </div>
            </div>
        )
    }
}
