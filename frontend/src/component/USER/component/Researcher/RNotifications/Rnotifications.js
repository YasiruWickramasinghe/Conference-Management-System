import axios from 'axios';
import jwt_decode from 'jwt-decode'
import React, { Component } from 'react'

export default class Rnotifications extends Component {
    constructor(){
        super();

        this.state={
            AllNotify:[]
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/researchpaper/notification/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          
          this.setState({
            AllNotify: res.data. existingPapers,
          });
        }
      });
    }



    render() {
        return (
        
                
            <button type="button" class="btn btn-success btn-sm" style={{marginTop:"0rem"}}>
            Notifications <span class="badge badge-light" style={{fontSize:"15px"}}>{this.state.AllNotify.length}</span>
          </button>
        )
    }
}
