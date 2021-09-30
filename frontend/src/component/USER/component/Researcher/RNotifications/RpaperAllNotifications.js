import axios from "axios";
import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Redirect, withRouter } from "react-router-dom";

class RpaperAllNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AllNotify: [],
    };
  }

  componentDidMount() {
    this.retrievePapers();
  }

  retrievePapers = () => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/researchpaper/notification/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          this.setState({
            AllNotify: res.data.existingPapers,
          });
        }
      });
  };

  onDelete = (id) => {
    axios
      .delete(`http://localhost:5050/researchpaper/deletenotification/${id}`)
      .then((res) => {
        alert("Delete Successfully");
        this.retrievePapers();
        location.reload();
      });
  };

  render() {
    return (
      <div className="container">
        <div className="card" style={{ marginTop: "7rem" }}>
          <div class="card">
            <div class="card-body pl-5">
              <h3>Notifications</h3>
              <div className="row">
                <table className="table">
                  <tbody>
                    {this.state.AllNotify.map((papers, index) => (
                      <tr class="table-success" key={index}>
                        <th scope="row">{index + 1}</th>

                        <td>{papers.mTitle}</td>
                        <td>{papers.status}</td>
                        <td>
                          <a
                            className="btn btn-danger btn-sm ml-3"
                            href="#"
                            onClick={() => this.onDelete(papers._id)}
                          >
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RpaperAllNotifications);
