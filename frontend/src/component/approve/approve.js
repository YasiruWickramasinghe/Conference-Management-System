import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";

const approve = () => {
  const [cofarance, setcofarance] = useState([]);
  let x = 0;

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get("http://localhost:5000/api/conferences");
      setcofarance(data);
      console.log(cofarance);
    };
    sendRequest();
  }, []);

  console.log(cofarance);

  return (
    <React.Fragment>
      <br></br>

      <h1 class="text-center"> CONFERENCE</h1>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>title</th>
                  <th>speaker</th>
                  <th>date</th>
                </tr>
              </thead>

              {cofarance.map((cofaranc) => (
                <Product product={cofaranc} x={++x} />
              ))}
            </table>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-primary text-white mb-3">
              <div class="card-body">
                <h3>Cofarances</h3>
                <h4 class="display-4">
                  <i class="fas fa-folder"></i> {x}
                </h4>
                <a href="#" class="btn btn-outline-light btn-sm">
                  View
                </a>
              </div>
            </div>

            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>Speakers</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i> 4
                </h4>
                <a href="#" class="btn btn-outline-light btn-sm">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default approve;
