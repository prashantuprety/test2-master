import React from "react";

const Hire = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-3 text-start me-2 align-items-center">
          <h1>CDR Services for positive assessment by Engineers Australia</h1>
          <p>
            Engineers Australia uses a variety of customized papers to assess an
            engeneer's proficency in engeneering skills and
            knowledge,management, communication,and leadership.CDR for engeneers
            Australia consist of three different documents, namely:
          </p>
          <button className="btn btn-primary " style={{ width: "125px" }}>
            Hire Us
          </button>
        </div>
        <div className=" col-8 mt-5">
          <div className="row align-items-center mt-5">
            <div className="col-6 bg-primary mt-5">
              <div className="col-12  bg-danger ">
                <div className=" d-flex  cc justify-content-center  col-12">
                  <i class="bi bi-bucket-fill"></i>
                </div>
                <h2>3 Career Episodes</h2>
              </div>

              <div className="col-12 d-flex align-items-center justify-content-center  bg-danger">
                <div className=" d-flex  cc justify-content-center col-12">
                  <i class="bi bi-bucket-fill"></i>
                </div>
                <h2>3 Career Episodes</h2>
              </div>
            </div>
            <div className="col-6 bg-danger">
              <div className="  col-12">
                <div className="col-12  bg-primary">
                  <div className=" cc d-flex  cc justify-content-center col-12">
                    <i class="bi bi-arrow-right"></i>
                  </div>
                  <h2>3 Career Episodes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
