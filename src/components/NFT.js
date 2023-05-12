import React from "react";

const NFT = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col">
            <div className="card-body ">
              <div className="card text-white border-0 bg-dark">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eaf5ndwlTCX_SJ6KxAGgKQOVTqWiSKzbnBXgFXDiDNhMl70s8RW8djqp7xOS4D8lH5k&usqp=CAU"
                  className="img-fluid"
                  alt="Apple Computer"
                />

                <div className="text-left">
                  <br />
                  <h5 className="card-title">Equilibrium #3429</h5>
                  <p className="text-muted  text-white-50">
                    Our equilibrium collection promotes balance and calm.
                  </p>
                </div>
                <div>
                  <div className="d-flex justify-content-around">
                    <span className="text-info">0.041ETH</span>
                    <span className="text-muted"> 3 days left</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="  text-danger w-100 h-2 border-3 ">
                      <hr style={{ color: "red", backgroundColor: "blue" }} />
                    </div>
                  </div>

                  <div className="mx-auto justify-content-around total ">
                    <span className="text-info ms-5">Creation of </span>

                    <span className="text-muted me-5"> Ankit Shiwakoti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFT;
