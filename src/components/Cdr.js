import React, { useEffect, useState } from "react";
import axios from "axios";
import pic1 from "../images/iccc.png";
import { HTMLReactParserOptions } from "html-react-parser";
import HTMLReactParser from "html-react-parser";
import parse from "html-react-parser";

const Cdr = () => {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    const api = axios
      .get("https://cdrforengineer.cdrsites.rocks/api/landing?populate=deep")
      .then((response) => {
        setPost(response.data.data.attributes.trackRecord);
      });
  });
  //   const data = api.data.data.attributes;
  const html = "<div>Example HTML string</div>";
  console.log(post);

  return (
    <div className="container">
      <h2 className="mt-4">Expert CDR Report Writing Service in Australia</h2>
      <div className="row   mt-4 ">
        {post?.map((items) => (
          <div className="d-flex col-lg-6 col-12 px-1 mb-2 " id={items?.id}>
            <div className="  cdd col-lg-2 col-md-2 col-2  ">
              <div className="circular--portrait mt-3 ms-4 ">
                <img
                  src={items?.image?.data?.attributes?.url}
                  className="img-fluid mt-2 ms-1 "
                  alt="images "
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <div className=" cdd col-lg-10 col-md-10 col-10 ">
              <div className="card-body ">
                <h5 className="card-title text-start ">{items?.title}</h5>

                <p className="card-text mt-2 text-start">
                  {parse(items.paragraph)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cdr;
// const Axiouss = () => {
//     const api = axios
//       .get("https://cdrforengineer.cdrsites.rocks/api/landing?populate=deep")
//       .then((Res) => {
//         //   const dats = Res.json();
/* {
        {new Array(6).fill("").map((items) => ( */
//         console.log(Res.data.data.attributes.trackRecord);

//         //   console.log(Res.JSON().data.attributes);
//       });
