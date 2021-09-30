import React, { Component } from "react";
import axios from "axios";

const initialstate = {
  title: "",
  date: "",
  description: "",
  type: "",
  speaker: "",
  charge: 0,
};

class UpdateConference extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialstate;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5001/conference/getconference/" +
          this.props.match.params.id
      )
      .then((response) => {
        //console.log(response.data.data.name);
        this.setState({
          title: response.data.data.title,
          date: response.data.data.date,
          description: response.data.data.description,
          type: response.data.data.type,
          speaker: response.data.data.speaker,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const conference = {
      title: this.state.title,
      date: this.state.date,
      description: this.state.description,
      type: "pending",
      speaker: this.state.speaker,
    };

    console.log(conference);

    axios
      .post(
        "http://localhost:5001/conference/updateconference/" +
          this.props.match.params.id,
        conference
      )
      .then((res) => console.log(res.data));

    window.location = "/list-conference";
  }

  render() {
    return (
      <div className="container">
        <h1>Edit conference</h1>
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

export default UpdateConference;
