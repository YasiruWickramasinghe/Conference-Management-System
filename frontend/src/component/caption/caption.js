import React from "react";

const caption = () => {
  return (
    <React.Fragment>
      <div width="100%" class="bg-dark">
        <div class="col-sm-8 m-auto">
          <div id="slider4" class="carousel slide mb-5" data-ride="carousel">
            <ol class="carousel-indicators">
              <li class="active" data-target="#slider4" data-slide-to="0"></li>
              <li data-target="#slider4" data-slide-to="1"></li>
              <li data-target="#slider4" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src={require("url:./img/1.jpg")}
                  alt="First Slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Slide One</h1>
                  <h1>
                    A conference is a meeting, often lasting a few days, which
                    is organized on a particular subject or to bring together
                    people who have a common interest. ... A conference is a
                    meeting at which formal discussions take place.
                  </h1>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src={require("url:./img/2.jpg")}
                  alt="Second Slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Slide Two</h1>
                  <h1>
                    A conference is a meeting, often lasting a few days, which
                    is organized on a particular subject or to bring together
                    people who have a common interest. ... A conference is a
                    meeting at which formal discussions take place.
                  </h1>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src={require("url:./img/3.jpg")}
                  alt="Third Slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Slide Three</h1>
                  <h1>
                    A conference is a meeting, often lasting a few days, which
                    is organized on a particular subject or to bring together
                    people who have a common interest. ... A conference is a
                    meeting at which formal discussions take place.
                  </h1>
                </div>
              </div>
            </div>

            <a href="#slider4" class="carousel-control-prev" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>

            <a href="#slider4" class="carousel-control-next" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default caption;
