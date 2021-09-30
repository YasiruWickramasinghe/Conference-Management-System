import axios from "axios";
import React, { Component } from "react";

//import logo from 'url:./avatar.png';
//<img src={logo} />

const initialstate = {
  title: "",
  date: "",
  description: "",
  type: "",
  speaker: "",
};
class CreateConference extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = initialstate;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let category = {
      title: this.state.title,
      date: this.state.date,
      description: this.state.description,
      type: "pending",
      speaker: this.state.speaker,
    };
    console.log(category);
    axios
      .post("http://localhost:5001/conference/createconference", category)
      .then((response) => {
        alert("inserted");
        console.log(response);
        window.location = "/list-conference";
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Create conference</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Description
            </label>
            <textarea
              type="textarea"
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Speaker
            </label>
            <input
              type="text"
              className="form-control"
              id="speaker"
              name="speaker"
              value={this.state.speaker}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateConference;
