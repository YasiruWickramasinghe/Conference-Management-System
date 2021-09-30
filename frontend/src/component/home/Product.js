import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Container>
      <div className="card bg-dark text-white mb-3">
        <Link to={`/conference/${product._id}`}>
          <h1>
            {" "}
            <div className="card-header text-light">{product.title}</div>
          </h1>
        </Link>
        <div className="card-body">
          <h4 className="card-title">{product.date}</h4>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default Product;
