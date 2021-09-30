import React from "react";
import { useHistory } from "react-router-dom";
//import Rating from "./Rating";

const Product = ({ product, x }) => {
  const history = useHistory();

  async function ApproveState() {
    const response = await fetch(
      `http://localhost:5000/api/conferences/${product._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "approved",
        }),
      }
    );

    history.push("/");
  }

  async function RejectState() {
    const response = await fetch(
      `http://localhost:5000/api/conferences/${product._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "reject",
        }),
      }
    );

    history.push("/");
  }
  //console.log(product.speakers);
  return (
    <tbody>
      <tr>
        <th scope="row">{x}</th>
        <td>{product.title}</td>
        <td>{product.speaker}</td>
        <td>{product.date}</td>
        <td>{product.type}</td>
        <td>
          <button onClick={ApproveState} class="btn btn-success">
            Approve
          </button>
        </td>
        <td>
          <button onClick={RejectState} class="btn btn-danger">
            Reject
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Product;
