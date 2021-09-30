import React, { Component } from 'react'
import {
    MDBIcon,
  } from "mdbreact";

export default class CoverImage2 extends Component {
    render() {
        var myCurrentDate = new Date();
    var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();
    const newCurrentDate = date;
        return (
            <div
              className="w-100"
              style={{
                backgroundImage:`url("https://mdbootstrap.com/img/Photos/Others/images/43.jpg")`,
                backgroundPosition: "center",
                height: "60vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <h5 className="white-text text-right">
                  <br />
                  <MDBIcon icon="calendar-alt" /> {newCurrentDate}
                </h5>
                <br />
                <center>
                  <br />
                  <br />
                  <br />
                  <h1 className="white-text  font-weight-bold">
                    Share Your Experience With US
                  </h1>
                </center>
              </div>
            </div>
        )
    }
}
