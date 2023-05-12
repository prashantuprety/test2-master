import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import v1 from "../images/v1.jpg";
import v2 from "../images/v2.jpg";
import v3 from "../images/v3.jpg";
import v4 from "../images/v4.jpg";
import v5 from "../images/v5.jpg";
import v6 from "../images/v6.jpg";
import v7 from "../images/v7.jpg";
import T_Website from "./T_Website";

const Tabs_LoadMore = () => {
  const [items, setItems] = useState([]);

  const [post, setPost] = useState(null);
  const [but, setBut] = useState("wete");

  useEffect(() => {
    const api = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      });
  });

  return (
    <>
      <ul
        class="nav nav-pills 
       w-50 justify-content-center me-auto mt-3  "
        style={{
          marginLeft: "22%",
          height: "60px",
          backgroundColor: "#e3e3e3",
        }}
      >
        <li class="nav-item">
          <button
            class="nav-link active bg-white text-dark m-2 ms-2 "
            aria-current="page"
            onClick={() => setBut("website")}
          >
            Website
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link  bg-white text-dark  m-2  ms-2"
            aria-current="page"
            onClick={() => setBut("landing")}
          >
            Landing Page
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link  bg-white text-dark   m-2  ms-2 "
            aria-current="page"
            href="#"
          >
            IOS App
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link bg-white text-dark  m-2  ms-2"
            aria-current="page"
            href="#"
          >
            Landing Page
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link bg-white text-dark   m-2   ms-2"
            aria-current="page"
            href="#"
          >
            Branding Design
          </button>
        </li>
      </ul>
      <div className="container">
        {but === "website" ? <T_Website /> : null}
        {but === "landing" ? <T_Website /> : null}
      </div>
    </>
  );
};

export default Tabs_LoadMore;
