import React from "react";
import pic1 from "../images/iccc.png";

const Sample = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-start  "
        style={{ backgroundColor: "aquamarine" }}
      >
        {new Array(6).fill("").map((items) => (
          <div class="col-lg-4  col-sm-6 mt-5 ">
            <div className=" text-start  mt-2 ">
              <img src={pic1} alt="images ho " className="img-fluid mt-2" />
              <div class="text-color mt-4 ">Welcome</div>
              <div class="card-body ps-0 mt-1 ">
                <p class="card-text text-color  ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
