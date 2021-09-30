import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class RevStartUp extends Component {
  render() {
    return (
      <div 
      
      style={{ 
        backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
        height : "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}

        >
          <div className="container text-white">
            <div className="row">
              <div className="col-6">
                <br/><br/><br/><br/>
                <h1>Welcome</h1>
                <br/><br/>
                <h4>
                Are you experiencing an issue with our automated proofreader? Is our service not working the way it should? In either case, our technical support team wants to know and provide assistance to you
                </h4>
                <br/><br/>
                <button type="button" class="btn btn-outline-primary">
                    <Link class="nav-link" to="rev/researchpaper/last/:id">Get Start</Link>  
                    </button>   
              </div>
              
            </div>
          </div>

      </div>
    )
  }
}
