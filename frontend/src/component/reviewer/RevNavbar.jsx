import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Reviewer navigation bar

export default class RevNavbar extends Component {
    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 fixed-top">
                    <div class="container">
                    <h5 class="text-light bg-dark" >Reviewer Dashboard</h5>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/rev/researchpaper/last/:id">
                                    Reviewer Home
                                </Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/rev/research/underreview">
                                    New Research Papers
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/rev/research/reviewed">
                                    Old Research Papers
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/rev/workshop/underreview">
                                        New Workshop Proposals
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/rev/workshop/reviewed">
                                    Old Workshop Proposals
                                </Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/rev/researchProfile">
                                    Profile
                                </Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link" to="/">
                                    Logout
                                </Link>
                            </li>
                    </ul>
                    </div>
                </nav>
                <br/><br/><br/>
            </div>
        )
    }
}



export default RevNavbar;
