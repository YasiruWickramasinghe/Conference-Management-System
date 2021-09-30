import React, { Component } from "react";
import axios from "axios";

const initialstate = {
  conferences: [],
};
class ListConference extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/conference/getallconference")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ conferences: response.data.data });
      });
  }

  navigatedelete(e, conferenceId) {
    axios
      .delete(
        "http://localhost:5001/conference/deleteconference/" + conferenceId
      )
      .then((response) => {
        console.log(response.data.data);
        location.reload();
      });
  }

  navigateupdate(e, conferenceId) {
    window.location = "/updateconference/" + conferenceId;
  }

  render() {
    return (
      <div className="container">
        <br />
        <h3>List Conference</h3>
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Speaker</th>
              <th>Actions</th>
            </tr>
            <br />
          </thead>
          <tbody>
            {this.state.conferences.length > 0 &&
              this.state.conferences.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.speaker}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.navigateupdate(e, item._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.navigatedelete(e, item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListConference;
