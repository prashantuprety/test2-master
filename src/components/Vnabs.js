import React from "react";
import pic1 from "../images/men.png";
import { useState } from "react";

const Vnabs = ({ data }) => {
  const [active, setActive] = useState(data[0]?.button);
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-1 bg-primary p-0  position-relative ">
          <div className="col-12 position-absolute start-50 top-50 bottom-50  translate-middle-y">
            {data?.map((items) => (
              <div
                className=" d-flex  justify-content-center col-12  "
                key={items.id}
              >
                <button
                  className={`circular--portrait border-0 fw-bold ${
                    active === items?.button
                      ? "text-white bg-dark  "
                      : "text-black  bg-light bg-gradient "
                  }`}
                  onClick={() => setActive(items.button)}
                >
                  {items?.button}
                </button>
                {/* <button className="">1</button> */}
              </div>
            ))}
          </div>
        </div>

        <div className="col-11  ">
          <div className="col-12  ">
            {active === data[0]?.button && (
              <h1 className="text-start mt-3"> {data[0].head1}</h1>
            )}
            {active === data[0]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[0].body1}</p>
            )}
            {active === data[1]?.button && (
              <h1 className="text-start mt-3"> {data[1].head1}</h1>
            )}
            {active === data[1]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[1].body1}</p>
            )}
            {active === data[2]?.button && (
              <h1 className="text-start mt-3"> {data[2].head1}</h1>
            )}
            {active === data[2]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[2].body1}</p>
            )}
            {active === data[3]?.button && (
              <h1 className="text-start mt-3"> {data[3].head1}</h1>
            )}
            {active === data[3]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[3].body1}</p>
            )}
          </div>
          <div className="col-12 ">
            <div className="row mt-5">
              <div class="col-8 mt-4">
                {active === data[0]?.button && (
                  <h1 className="text-start ms-5"> {data[0].head2}</h1>
                )}
                {active === data[0]?.button && (
                  <p className="text-start ms-5 mt-2 fs-5 fw-light">
                    {data[0].body2}
                  </p>
                )}

                {active === data[1]?.button && (
                  <h1 className="text-start ms-5"> {data[1].head2}</h1>
                )}
                {active === data[1]?.button && (
                  <p className="text-start ms-5 mt-2 fs-5 fw-light">
                    {data[1].body2}
                  </p>
                )}

                {active === data[2]?.button && (
                  <h1 className="text-start ms-5"> {data[2].head2}</h1>
                )}
                {active === data[2]?.button && (
                  <p className="text-start ms-5 mt-2 fs-5 fw-light">
                    {data[2].body2}
                  </p>
                )}

                {active === data[3]?.button && (
                  <h1 className="text-start ms-5"> {data[3].head2}</h1>
                )}
                {active === data[3]?.button && (
                  <p className="text-start ms-5 mt-2 fs-5 fw-light">
                    {data[3].body2}
                  </p>
                )}

                <h1 className="text-start ms-5">
                  Get Started <i class="bi bi-arrow-right"></i>
                </h1>
              </div>
              <div class="col-4 mb-4">
                <img
                  src={pic1}
                  alt="hehe"
                  className="img-fluid"
                  width={350}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vnabs;
