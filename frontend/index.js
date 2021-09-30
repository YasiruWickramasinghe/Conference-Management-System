import React from "react";

//import mdb react
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
