import React, { Component } from 'react';

import RevHorLine from '../RevHorLine';

export default class RevOldResearchDescription extends Component {
    render() {
        return (
            <div className="container text-light ">
            <div className="row d-flex justify-content-center black-text">
              <h1 className="font-weight-bold">Old Research papers</h1>
            </div>     
            <RevHorLine/>        
              <div className="row row-cols-1 row-cols-md-1 g-4">
                  <div className="col">
                      <div className="card bg-dark border-primary">   
                      <div className="card-body">
                          <div className="row">
                              <div className="col-3">
                                  <h3 className="red-text">Instruction</h3>
                                  <hr className="hr-light"/>
                              </div>
                              <div className="col-9">
                                  <p className="white-text">   papers on those issues should really only be included if they have some relevance to educational technology. Please review the conference Scope & Topics.he reviews help the Executive Committee select which papers to accept and reject. ...
                                  </p>
                              </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              <RevHorLine/>     
          </div>
        )
    }
}
