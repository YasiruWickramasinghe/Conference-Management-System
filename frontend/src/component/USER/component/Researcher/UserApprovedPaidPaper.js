import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      userId:'',
      papers: [],

    };
  }

  componentDidMount() {

    this.retrievePapers();
  }

  retrievePapers = () => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    axios
      .get(`http://localhost:5050/rpaper/approvedpaidpapers/${decode.email}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            papers: res.data.existingPapers,
          });

          // console.log(this.state.papers);
        }
      });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:5050/rpaper/underRdelete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePapers();
    });
  };

  filterData(papers, searchKey) {
    const result = papers.filter(
      (paper) =>
        paper.mTitle.toLowerCase().includes(searchKey) ||
        // paper.category.toLowerCase().includes(searchKey) ||
        paper.abstract.toLowerCase().includes(searchKey) ||
         paper.status.toLowerCase().includes(searchKey) ||
        paper.author.toLowerCase().includes(searchKey)
    );
    this.setState({ papers: result });
  }

  handleSearchArea = (e) => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    const searchKey = e.currentTarget.value;

    axios.get(`http://localhost:5050/rpaper/approvedpaidpapers/${decode.email}`).then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPapers, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "3rem" }}>
        <div class="d-flex">
          <div class="mr-auto p-2"> <h4 style={{fontWeight:"bold"}}>All Approved Paid Research Papers</h4></div>
          <div class="p-2"><input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input></div>

        </div>

        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Manuscript Title</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.papers.map((papers, index) => (
              <tr class="table-success" key={index}>
                <th scope="row">{index + 1}</th>

                <td>
                  <a
                    href={`/user/paperDetail/${papers._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {papers.mTitle}
                  </a>
                </td>
                <td>{papers.category}</td>
                <td>{papers.status}</td>
                <td>
                <div className="row">
                <a
                    className="btn btn-light btn-sm"
                    href={`/user/viewRpaper/${papers._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;View
                  </a>
                  &nbsp;
                  
            
                  <a
                    className="btn btn-danger btn-sm mr-3"
                    href="#"
                    onClick={() => this.onDelete(papers._id)}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
