import React from "react";
import { Link } from "react-router-dom";



import {MDBRow,MDBCol,MDBContainer} from "mdbreact";

const RevStartUp = () => {
  return (
      <div className="w-100"
      
      style={{ 
        backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
        height : "60vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}

        >
            <br/><br/><br/><br/>
        <MDBContainer>
              <MDBRow>
                <MDBCol md="8" className="white-text text-center text-md-left mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5" >
                      Reviewer Home
                    </h1>  
                    <hr className="hr-dark" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
      </div>
    );
}



export default RevStartUp;