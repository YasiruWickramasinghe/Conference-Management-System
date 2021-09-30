import React, { useState, useEffect } from "react";
import axios from "axios";
import CoverImage from "../Decorate Component/CoverImage";
import Attention from "../Decorate Component/Attention";
import SocilMedia from "../Decorate Component/SocialMedia";
import { withRouter } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBTable,
  MDBIcon,
  MDBTableBody,
  MDBTableHead,
  MDBCol,
} from "mdbreact";
import jwt_decode from "jwt-decode";

const User = () => {
  const [newUser, setNewUser] = useState({
    photo: "",
    mTitle: "",
    category: "",
    abstract: "",
    keyword: "",
    author: "",
    userId: "",
    first_name: "",
    last_name: "",
    con_number: "",
  });

  useEffect(() => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);

    setNewUser({
      userId: decode.email,
      first_name: decode.first_name,
      last_name: decode.last_name,
      con_number: decode.con_number,
    });
    console.log(newUser.userId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("mTitle", newUser.mTitle);
    formData.append("category", newUser.category);
    formData.append("abstract", newUser.abstract);
    formData.append("keyword", newUser.keyword);
    formData.append("author", newUser.author);
    formData.append("userId", newUser.userId);
    formData.append("first_name", newUser.first_name);
    formData.append("last_name", newUser.last_name);
    formData.append("con_number", newUser.con_number);

    console.log(formData);
    axios
      .post("http://localhost:5050/rpaper/submit", formData)
      .then((res) => {
        alert("Paper Added Successfully!");
        setNewUser({
          photo: "",
          mTitle: "",
          category: "",
          abstract: "",
          keyword: "",
          author: "",
        });
        this.props.history.push(`/user/userPapersRetrieve`);
        console.log(res);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };
  return (
    <div>
      <div style={{ marginTop: "3rem" }}>
        <div className="row">
          <CoverImage />
        </div>
        <div className="row">
          <MDBContainer>
            <br />
            <MDBRow>
              <MDBCol md="8">
                <MDBCard
                  wide
                  cascade
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url(https://image.freepik.com/free-vector/white-abstract-background_23-2148882948.jpg)",

                    backgroundSize: "cover",
                  }}
                >
                  <MDBCardBody cascade>
                    <MDBRow>
                      <MDBCol md="8">
                        <MDBContainer>
                          <MDBRow>
                            <MDBCol md="12">
                              <MDBCard>
                                <div className="header pt-3 mdb-color lighten-3">
                                  <MDBRow className="d-flex justify-content-center">
                                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                                      Research Paper
                                    </h3>
                                  </MDBRow>
                                </div>
                                <MDBCardBody>
                                  <form
                                    onSubmit={handleSubmit}
                                    encType="multipart/form-data"
                                  >
                                    <label
                                      htmlFor="defaultFormCardNameEx"
                                      className="grey-text font-weight-light mt-3"
                                    >
                                      Paper Title
                                    </label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      name="mTitle"
                                      required
                                      value={newUser.mTitle}
                                      onChange={handleChange}
                                    />
                                    <br />
                                    <label
                                      htmlFor="defaultFormCardNameEx"
                                      className="grey-text font-weight-light"
                                    >
                                      Author
                                    </label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      name="author"
                                      required
                                      value={newUser.author}
                                      onChange={handleChange}
                                    />

                                    <br />
                                    <label
                                      htmlFor="defaultFormCardNameEx"
                                      className="grey-text font-weight-light"
                                    >
                                      Category
                                    </label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      name="category"
                                      required
                                      value={newUser.category}
                                      onChange={handleChange}
                                    />

                                    <br />
                                    <label
                                      htmlFor="defaultFormContactMessageEx"
                                      className="grey-text"
                                    >
                                      Keyword
                                    </label>
                                    <input
                                      type="text"
                                      id="defaultFormCardNameEx"
                                      className="form-control"
                                      name="keyword"
                                      required
                                      value={newUser.keyword}
                                      onChange={handleChange}
                                    />

                                    <br />
                                    <label
                                      htmlFor="defaultFormContactMessageEx"
                                      className="grey-text"
                                    >
                                      Abstract
                                    </label>
                                    <textarea
                                      type="text"
                                      id="defaultFormContactMessageEx"
                                      className="form-control"
                                      rows="3"
                                      name="abstract"
                                      required
                                      value={newUser.abstract}
                                      onChange={handleChange}
                                    />
                                    <br />

                                    <input
                                      type="file"
                                      accept=".png, .jpg, .jpeg, .pdf, .pptx"
                                      name="photo"
                                      onChange={handlePhoto}
                                    />

                                    <div className="text-center py-4 mt-3">
                                      <input
                                        type="submit"
                                        class="btn btn-primary"
                                      />
                                    </div>
                                  </form>
                                </MDBCardBody>
                              </MDBCard>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBTable>
                          <MDBTableHead>
                            <tr>
                              <th className="font-weight-bold">
                                Contact Details
                              </th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            <tr>
                              <td>
                                <p>
                                  <MDBIcon icon="user" /> {newUser.first_name}{" "}
                                  {newUser.last_name}
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>
                                  <MDBIcon icon="envelope" /> {newUser.userId}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-1">
                                  <MDBIcon icon="phone" />
                                  {newUser.con_number}
                                </p>
                              </td>
                            </tr>
                          </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                      </MDBCol>
                    </MDBRow>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="4">
                <MDBRow>
                  <Attention />
                </MDBRow>
                <br />
                <MDBRow>
                  <SocilMedia />
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <br />
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default withRouter(User);
