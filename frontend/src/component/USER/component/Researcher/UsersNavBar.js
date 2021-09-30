import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import RNotification from  '../Researcher/RNotifications/Rnotifications'


class NavBar extends Component {

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("usertoken");
        this.props.history.push(`/user/userLogin`);
      }

      

    render() { 

        const notLogin = (
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/userSignup">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/user/userLogin">
                    Login
                  </Link>
                </li>

              </ul>
        )


        const userLogin = (
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/user/userDashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/userPapersRetrieve">
                    Pending & Denied Papers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/user/allApprovedPapers">
                    Approved Papers
                  </Link>
                </li>
                
                 <li className="nav-item">
                  <Link className="nav-link" to="/user/RpaperInsert">
                    New Paper
                  </Link>
                </li>
                
                <li className="nav-item">
                  <a href="/user/userLogin" onClick={this.logOut.bind(this)} className="nav-link" to="/Login">
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/rnotifications">
                    <RNotification/>
                  </Link>
                </li>
              </ul>
        )


        return ( 
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Welcome To CMS
              </Link>

              {localStorage.usertoken ?  userLogin: notLogin}

            </div>
          </nav>
         );
    }
}
 
export default withRouter(NavBar);
   
