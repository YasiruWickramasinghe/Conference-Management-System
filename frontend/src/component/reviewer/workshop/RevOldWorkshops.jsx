import React, { Component } from "react";

import RevOldWorkshopDescription from "./RevOldWorkshopDescription";
import RevOldWorkshopTable from "./RevOldWorkshopTable";

import RevFooter from "../RevFooter";

//all worshop proposals
export default class RevOldWorkshops extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div className="grey lighten-1">
          <br />
          <RevOldWorkshopDescription />
          <RevOldWorkshopTable />
          <RevFooter />
        </div>
      </div>
    );
  }
}
