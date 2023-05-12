import React from "react";
import { useState } from "react";
import Cdrsample1 from "./Cdrsample1";
const Main = ({ data }) => {
  const [active, setActive] = useState(data[0]?.title);
  console.log(active);
  return (
    <div className="container">
      <div className="row mt-5   ">
        {data?.map((items) => (
          <div className="col-lg-4  p-0" key={items.id}>
            <button
              className={`btn-lg w-100 border-0 rounded-0 ${
                active === items?.title
                  ? "text-white bg-secondary fw-bold underline "
                  : "text-black  bg-light bg-gradient "
              }`}
              onClick={() => setActive(items.title)}
            >
              {items?.title}
            </button>
          </div>
        ))}
      </div>
      <div className="row bg-light bg-gradient mb-5  p-0 ">
        {active === data[0]?.title && (
          <p className="text-start ms-3 fs-6  mt-4">{data[0].heading}</p>
        )}
        {active === data[1]?.title && (
          <p className="text-start ms-3 fs-6 mt-4"> {data[1].heading}</p>
        )}
        {active === data[2]?.title && (
          <p className="text-start ms-3 fs-6 mt-4"> {data[2].heading}</p>
        )}
        {active === data[0]?.title && (
          <p className="text-start ms-3 fs-6 "> {data[0].paragraph}</p>
        )}
        {active === data[1]?.title && (
          <p className="text-start ms-3 fs-6 "> {data[1].paragraph}</p>
        )}
        {active === data[2]?.title && (
          <p className="text-start ms-3 fs-6 "> {data[2].paragraph}</p>
        )}

        <div className=" p-0 bg-light bg-gradient  ">
          <ul class="list-group bg-light bg-gradient p-0 ms-4 ">
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> State-space of a
              problem is a set of all states which can be don.
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> A set of all states
              which can be don
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> A list item nascetur
              ridiculus mus. Donec quam felis
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> State-space of a
              problem is a set of all.
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> A list item nascetur
              ridiculus mus. Donec quam felis nascetur ridiculus mus. Donec quam
              felis
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> State-space of a
              problem is a set of all.
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> A list item nascetur
              ridiculus mus. Donec
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-3"> </i> State-space of a
              problem is a set of all.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
