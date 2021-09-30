import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

const singleConference = ({ match }) => {
  const [conference, setconference] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/conferences/${id}`
      );
      setconference(data);
      console.log(data);
    };
    sendRequest();
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1 class="text-center">
        <u>{conference.title}</u>
      </h1>

      <Container>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="p-3 w-75">
                  <table class="table table-dark">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>TITLE</td>
                        <td>{conference.title}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>SPEAKER</td>
                        <td>{conference.speaker}</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>DATE</td>
                        <td>{conference.date}</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>DISCRIPTION</td>
                        <td>{conference.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td>
                <h2 class="text-center">SPEAKER</h2>
                <img
                  src={require("url:./avatar.png")}
                  width="300"
                  height="300"
                />
                <br></br>
                <button class="btn btn-primary btn-lg" type="button">
                  <i class="fas fa-user"></i> About Mr/Miss {conference.speaker}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default singleConference;
