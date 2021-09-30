import React, { Component } from "react";

import RevNewWorkshopDescription from "./RevNewWorkshopDescription";
import RevNewWorkshopTable from "./RevNewWorkshopTable";

import RevFooter from "../RevFooter";

//all worshop proposals
export default class RevNewWorkshops extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div className="grey lighten-1">
          <br />
          <RevNewWorkshopDescription />
          <RevNewWorkshopTable />
          <RevFooter />
        </div>
      </div>
    );
  }
}
