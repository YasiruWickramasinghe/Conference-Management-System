import React, { Component } from "react";
import axios from "axios";

const initialstate = {
  name: "",
  position: "",
  description: "",
  charge: 0,
};

class UpdateSpeaker extends Component {
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
        "http://localhost:5001/speaker/getspeaker/" + this.props.match.params.id
      )
      .then((response) => {
        //console.log(response.data.data.name);
        this.setState({
          name: response.data.data.name,
          position: response.data.data.position,
          description: response.data.data.description,
          charge: response.data.data.charge,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const speaker = {
      name: this.state.name,
      position: this.state.position,
      description: this.state.description,
      charge: this.state.charge,
    };

    console.log(speaker);

    axios
      .post(
        "http://localhost:5001/speaker/updatespeaker/" +
          this.props.match.params.id,
        speaker
      )
      .then((res) => console.log(res.data));

    window.location = "/list-speaker";
  }

  render() {
    return (
      <div className="container">
        <h1>Update speaker</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
              id="position"
              name="position"
              value={this.state.position}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Charge
            </label>
            <input
              type="number"
              className="form-control"
              id="charge"
              name="charge"
              value={this.state.charge}
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

export default UpdateSpeaker;
