import React, { Component } from 'react';
import RevNavbar from "./RevNavbar";



export default class RevProfile extends Component {


    render() {
        return (
            <div className="container" >
                <div >
                <RevNavbar/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div>
                <p>Profile</p>
                <button type="button" class="btn btn-outline-primary">Primary</button>
                </div>
            </div>
        )
    }
}

export default RevProfile;

