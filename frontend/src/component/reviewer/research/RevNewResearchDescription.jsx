import React, { Component } from 'react';

import RevHorLine from '../RevHorLine';

export default class RevNewResearchDescription extends Component {
    render() {
        return (
            <div className="container text-dark ">
            <div className="row d-flex justify-content-center">
              <h1 className="font-weight-bold">New Research papers</h1>
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
                                  <p className="white-text">he reviews help the Executive Committee select which papers to accept and reject. ... Additionally, your reviews help the authors of papers make their papers and presentations stronger. Finally, your suggestions help the Program Chairs select the outstanding papers.
                                 
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
