import React from "react";

const LPD = () => {
  return (
    <div className="container bg-white ">
      <div className="row border-0 bg-white">
        {new Array(8).fill(" ").map((items) => (
          <div class=" col-sm-6  col-md-4 col-lg-3  card m-md-0 border-0 mt-5 pt-5">
            <div class="card-body pt-5 border-0">
              <h5 class="card-title   border-0 text-start">
                Lead Program Design
              </h5>
            </div>
            <ul
              class="list-group list-group-flush text-start lead border-0"
              style={{ fontSize: "14px" }}
            >
              <li class="list-group-item border-0">
                <i class="bi bi-compass"> </i> Kathmandu,NP
              </li>
              <li class="list-group-item border-0">
                <i class="bi bi-clock"> </i> Full Time
              </li>
            </ul>
            <div class="card-body  justify-content-start d-flex  border-0">
              <button class="button btn btn-white text-dark fw-bold border-dark rounded ">
                Apply now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LPD;
