import React, { Component } from "react";

import RevOldResearchTable from "./RevOldResearchTable";
import RevOldResearchDescription from "./RevOldResearchDescription";

import RevFooter from "../RevFooter";

//Old Researchs
export default class RevOldResearchs extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div className="grey lighten-1">
          <br />
          <RevOldResearchDescription />
          <RevOldResearchTable />
          <RevFooter />
        </div>
      </div>
    );
  }
}
