import React, { Component } from "react";
import axios from "axios";

const initialstate = {
  speakers: [],
};
class ListSpeaker extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/speaker/getallspeaker")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ speakers: response.data.data });
      });
  }

  navigatedelete(e, speakerId) {
    axios
      .delete("http://localhost:5001/speaker/deletespeaker/" + speakerId)
      .then((response) => {
        console.log(response.data.data);
        location.reload();
      });
  }

  navigateupdate(e, speakerId) {
    window.location = "/updatespeaker/" + speakerId;
  }

  render() {
    return (
      <div className="container">
        <br />
        <h3>List Category</h3>
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Charge</th>
              <th>Actions</th>
            </tr>
            <br />
          </thead>
          <tbody>
            {this.state.speakers.length > 0 &&
              this.state.speakers.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.charge}</td>
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

export default ListSpeaker;
