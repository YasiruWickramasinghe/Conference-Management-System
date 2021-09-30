import React, { Component } from "react";

import RevHomeImg from "./RevHomeImg";
import RevHomeDescription from "./RevHomeDescription";
import RevHomeSummary from "./RevHomeSummary";
import RevHomeDescription2 from "./RevHomeDescription2";
import RevHomeLatestReview from "./RevHomeLatestReview";

import RevHorLine from "../RevHorLine";
import RevFooter from "../RevFooter";

export default class RevHome extends Component {
  render() {
    return (
      <div>
        <div className="grey lighten-1">
          <div className="row"></div>
          <div className="row">
            <RevHomeImg />
          </div>
          <br />
          <div className="container">
            <div className="row">
              <RevHomeDescription />
            </div>
            <br />
            <RevHorLine />
            <br />
            <div className="row">
              <RevHomeSummary />
            </div>
            <br />
            <RevHorLine />
            <br />
            <div className="row">
              <RevHomeDescription2 />
            </div>
            <br />
            <RevHorLine />
            <br />
            <div className="row">
              <RevHomeLatestReview />
            </div>
          </div>
          <br />
          <RevFooter />
        </div>
      </div>
    );
  }
}
