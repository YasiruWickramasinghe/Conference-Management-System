import React, { Component } from 'react';
import { register } from './RevFunction';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from 'mdbreact';

export default class RevRegister extends Component {

    constructor(){
        super();
        this.state={
            first_name:"",
            last_name:"",
            email:"",
            password:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    onSubmit(e){
        e.preventDefault();

        const reviewer ={
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password
        }

        register(reviewer).then(res=>{
            if(res){
                this.props.history.push(`/rev/login`)
            }
        })
    }

    render() {
        return (
            <div>
                <div className="w-100"
      
                    style={{ 
                        backgroundImage: `url("https://image.freepik.com/free-photo/rear-view-audience-listening-speakers-stage-conference-hall-seminar-meeting_41418-3389.jpg")` ,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",                   
                    }}
                >
                <MDBContainer>
                    <br/>
                    <center>
                    <MDBRow>  
                        
                        <MDBCol>
                        <MDBCard
                        className='card-image'
                        style={{
                          backgroundImage:
                            'url(https://image.freepik.com/vector-gratis/fondo-abstracto-agua_114588-474.jpg)',
                          width: '28rem',
                          backgroundSize: "cover",

                        }}
                        >
                            <MDBCardBody>
                            <MDBCardHeader className="form-header winter-neva-gradient rounded">
                                <h3 className="my-3">
                                <MDBIcon icon="user" /> SignUp
                                </h3>
                            </MDBCardHeader>
                            <form onSubmit={this.onSubmit}>
                                <div className="grey-text">
                                <MDBInput
                                    label="Your First Name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="first_name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                                <MDBInput
                                    label="Your Last Name"
                                    icon="user-circle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="last_name"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                                <MDBInput
                                    label="Your Email"
                                    icon="envelope"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="text-center py-4 mt-3">
                                <button className="btn btn-lg btn-dark btn-block">Register</button>
                                </div>
                                <hr/>
                                <p className="font-small black-text mt-3">
                                    Already have an account?
                                    <a
                                    href="/rev/login"
                                    className="dark-black-text ml-1 font-weight-bold"
                                    >
                                    Sign In
                                    </a>
                                </p>
                            </form>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>  
                        
                    </MDBRow>
                    </center> 
                    <br/>
                </MDBContainer>
                </div>
            </div>
        )
    }
}
