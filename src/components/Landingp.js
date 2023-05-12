import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/L1.png";
import expand1 from "../images/socialmediaboost.png";
import expand2 from "../images/Indepth.png";
import expand3 from "../images/scientifically.png";
import img2 from "../images/real-time.png";
import img3 from "../images/cross.png";
import img4 from "../images/highly.png";
import img5 from "../images/mobile.png";
import img6 from "../images/meeting.png";
import img7 from "../images/100.png";
import img8 from "../images/83.png";
import free from "../images/free.png";
import s1 from "../images/s1.png";
import s2 from "../images/ss.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import s7 from "../images/s7.png";
import s8 from "../images/s8.png";
import s9 from "../images/s9.png";
import s10 from "../images/s10.png";
import s11 from "../images/s11.png";
import s12 from "../images/s12.png";
import logo from "../images/logo.png";
import { Row } from "react-bootstrap";

const Landingp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div className=" ">
        <ul
          style={{
            margin: "100px",
            right: "0",
            float: "right",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src={logo}
              style={{ width: "100%", height: "40px", objectFit: "contain" }}
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="  collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center"
              style={{ margin: "0 auto" }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Requirnment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Partners
                </a>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit">
              Hire Us Now
            </button>
          </div>
        </div>
      </nav>

      <div className=" bg-white">
        <section className="hero row align-items-center  ">
          <div className=" text-start col-sm-12 ms-5 col-md-6 col-lg-6  mt-5  pb-5">
            <h1 style={{ fontSize: "48px", color: "#2e3280" }}>
              Executive branding campaign
            </h1>
            <p className=" w-75  text-muted " style={{ fontSize: "18px" }}>
              True branding starts from within. We create and adopt unique
              branding resolution to strengthen your business.
            </p>
            <button
              className="btn btn-lg "
              style={{ backgroundColor: "blueviolet" }}
            >
              Get a Demo
            </button>
          </div>
          <div className="col-sm-12 col-md-5  m-auto ml-lg-auto mr-lg-0 col-lg-5 pt-5 pt-lg-0">
            <img alt="image" className="img-fluid" src={img1} />
          </div>
        </section>
        <section className="expand pt-5 row mt-5 pt-5 pb-5">
          <h2 style={{ fontSize: "48px", color: "#2e3280" }}>
            Expand Your Business
          </h2>
          <p> Plan ahead to make progress and lead the trend</p>
          <div className="row mt-5 pt-5 overflow-hidden">
            <div
              className="col-lg-4 col-sm-12 mt-md-4 mt-sm-4 pt-md-4 pt-sm-4 border-end border-dark"
              // style={{ borderRight: "0.54px solid black" }}
            >
              <img alt="image" className="img-fluid" src={expand1} />
              <h2 className="mt-4" style={{ fontSize: "20px", color: "black" }}>
                {" "}
                Social Media boost
              </h2>
            </div>

            <div
              className="col-lg-4 col-sm-12 mt-md-4 mt-sm-4 pt-md-4 pt-sm-4"
              style={{ borderRight: "0.54px solid black" }}
            >
              <img alt="image" className="img-fluid" src={expand2} />
              <h2 className="mt-4" style={{ fontSize: "20px", color: "black" }}>
                {" "}
                In-depth research analysis
              </h2>
            </div>

            <div className="col-lg-4 col-sm-12 mt-md-4 mt-sm-4 pt-md-4 pt-sm-4">
              <img alt="image" className="img-fluid" src={expand3} />
              <h2 className="mt-4" style={{ fontSize: "20px", color: "black" }}>
                {" "}
                Scientifically proven progress
              </h2>
            </div>
          </div>
        </section>
        <div className="container">
          <Row className="mt-5 pt-5">
            <h2 className="pt-4" style={{ fontSize: "48px", color: "#2e3280" }}>
              Receive real-time business analytics
            </h2>
            <p className="pt-3">
              <i className="bi bi-play-circle-fill"> </i> INTRO AND DEMO
            </p>
            <div className="col-md-6 col-sm-12 pt-4">
              <img
                alt="image"
                className="img-fluid"
                src={img2}
                width={500}
                height={500}
              />
            </div>

            <div className="col-md-6 mt-5">
              <div className="col-md-12 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="row pt-4">
                  <div className="col-md-3">
                    <img alt="image" className="imf-fluid" src={img3} />
                  </div>
                  <div className="col-md-9 text-start">
                    <p className="fw-bold">Cross-browser Compatible Design</p>
                    <p>
                      Apps are built based on highly compatible design for all
                      kinds of Internet browsers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-11  ms-md-5 ms-sm-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="row pt-4">
                  <div className="col-md-3">
                    <img alt="image" className="imf-fluid" src={img3} />
                  </div>
                  <div className="col-md-9 text-start">
                    <p className="fw-bold">Highly Responsive Tools</p>
                    <p>
                      Apps are built based on highly compatible design for all
                      kinds of Internet browsers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="row pt-4">
                  <div className="col-md-3">
                    <img alt="image" className="imf-fluid" src={img3} />
                  </div>
                  <div className="col-md-9 text-start">
                    <p className="fw-bold">Cross-browser Compatible Design</p>
                    <p>
                      Apps are built based on highly compatible design for all
                      kinds of Internet browsers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <Row style={{ backgroundColor: "#e3e4e8" }}>
          <div className="col-md-6">
            <img alt="image" src={img6} className="img-fluid" />
          </div>
          <div className="col-md-6 text-start mb-3 pt-5">
            <h2 style={{ fontSize: "48px", color: "#2e3280" }}>
              Meeting all of your requirements for SEO
            </h2>
            <p className="mb-3">
              AeroLand creates a prominent advantage for your business with
              strong features.
            </p>
            <p className="mb-3">
              <i class="bi bi-check2-circle"> </i>
              Customer First Content-focused Displaying Effects
            </p>
            <p className="mb-3">
              <i class="bi bi-check2-circle"> </i>
              High Definition Full-screen Sliders & Backgrounds
            </p>
            <p className="mb-3">
              <i class="bi bi-check2-circle"> </i>
              Fast Loading, Reader Friendly Navigation Style
            </p>
            <button
              className="btn btn-lg mt-4"
              style={{ backgroundColor: "blueviolet" }}
            >
              Learn more{" "}
            </button>
          </div>
        </Row>

        <div className="container">
          <Row className=" mt-5">
            <Slider {...settings}>
              <Row className="d-flex">
                <div className="  col-md-6">
                  <img src={img2} className="img-fluid" alt="image" />
                </div>
                <div className=" mt-5 col-md-6">
                  <div
                    className="content text-star shadow  bg-body-tertiary rounded"
                    style={{
                      backgroundColor: "white",
                      padding: "30 px",
                      marginBottom: "20px",
                    }}
                  >
                    <h2 className="title pt-5">
                      {" "}
                      Visionary Creative Team Member
                    </h2>
                    <div className="body  p-5">
                      <p>
                        We bring on like-minded and talented members to help you
                        grow a stronger business for fiercely reaching towards
                        higher goals every day. We try to form an all-star team
                        that deeply investigates your company culture to
                        advertise about it.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="d-flex">
                <div className="  col-md-6">
                  <img src={img2} className="img-fluid" alt="image" />
                </div>
                <div className=" mt-5 col-md-6">
                  <div
                    className="content text-star shadow  bg-body-tertiary rounded"
                    style={{
                      backgroundColor: "white",
                      padding: "30 px",
                      marginBottom: "20px",
                    }}
                  >
                    <h2 className="title pt-5">
                      {" "}
                      Visionary Creative Team Member
                    </h2>
                    <div className="body  p-5">
                      <p>
                        We bring on like-minded and talented members to help you
                        grow a stronger business for fiercely reaching towards
                        higher goals every day. We try to form an all-star team
                        that deeply investigates your company culture to
                        advertise about it.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>

              <Row className="d-flex">
                <div className="  col-md-6">
                  <img src={img2} className="img-fluid" alt="image" />
                </div>
                <div className=" mt-5 col-md-6">
                  <div
                    className="content text-star shadow  bg-body-tertiary rounded"
                    style={{
                      backgroundColor: "white",
                      padding: "30 px",
                      marginBottom: "20px",
                    }}
                  >
                    <h2 className="title pt-5">
                      {" "}
                      Visionary Creative Team Member
                    </h2>
                    <div className="body  p-5">
                      <p>
                        We bring on like-minded and talented members to help you
                        grow a stronger business for fiercely reaching towards
                        higher goals every day. We try to form an all-star team
                        that deeply investigates your company culture to
                        advertise about it.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </Slider>
          </Row>
        </div>

        <Row
          className="mt-5 "
          style={{ paddingTop: "40px", marginBottom: "50px" }}
        >
          <div className="col-3 mt-5 pe-0">
            <img
              alt="image"
              src={img7}
              className="img-fluid"
              width={150}
              height={150}
            />
          </div>
          <div className="col-3  mt-5 ps-0">
            <h2 className="text-start ps-0">Digital marketing</h2>
            <ul className="list-group list-group-flush text-start  ps-0 ">
              <li className="list-group-item border-0 ps-0">
                Keyword rank tracking
              </li>
              <li className="list-group-item  border-0 ps-0"> Website audit</li>
              <li className="list-group-item border-0 ps-0">Marketing SEO</li>
              <li className="list-group-item border-0 ps-0"> Social Media </li>
              <li className="list-group-item border-0 ps-0">
                On-page SEO Audit
              </li>
            </ul>
          </div>
          <div className="col-3 mt-5 pe-0 align-iteams-end justify-content-end">
            <img
              alt="image"
              src={img8}
              className="img-fluid"
              width={150}
              height={150}
            />
          </div>
          <div className="col-3 mt-5 justify-content-start ps-0">
            <h2 className="text-start">Digital marketing</h2>
            <ul className="list-group list-group-flush text-start ps-0">
              <li className="list-group-item border-0 ps-0 ">
                Keyword rank tracking
              </li>
              <li className="list-group-item border-0 ps-0"> Website audit</li>
              <li className="list-group-item border-0  ps-0">Marketing SEO</li>
              <li className="list-group-item border-0  ps-0"> Social Media </li>
              <li className="list-group-item border-0 ps-0">
                {" "}
                On-page SEO Audit{" "}
              </li>
            </ul>
          </div>
        </Row>

        <div
          className="row p-5"
          style={{ backgroundColor: "#f0eef7", paddingTop: "80px" }}
        >
          <div className="col-12 justify-content center align-items-center">
            <h2 style={{ fontSize: "48px", color: "#2e3280" }}>
              Affordable for everyone!
            </h2>
            <p className="  align-text-center mb-5 mt-4">
              If you are planning on developing a product landing app or
              website, take a look at this beautiful-crafted and error-free HTML
              template.
            </p>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <div className="mt-5">
                <img src={free} className="img-fluid" />
                <h2 className="mt-3">Free</h2>
              </div>
              <div className="card-body">
                <h1>
                  <b>$0 </b>
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="llist-group list-group-flush text-align-center justify-content-center ps-0">
                  <li className="list-group-item border-0 ps-0">03 projects</li>
                  <li className="list-group-item border-0 mt-0 ps-0 pt-0">
                    power And Predictive Dialing
                  </li>
                  <li className="list-group-item ps-0  pt-0 mt-0 border-0">
                    quality & Customer Experience
                  </li>
                  <li className="list-group-item ps-0 pt-0 mt-0 border-0">
                    Try for free,forever !
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-outline-info"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <div className="mt-5">
                <img src={free} className="img-fluid" />
                <h2 className="mt-3">Personal</h2>
              </div>
              <div className="card-body">
                <h1>
                  <b>$0 </b>
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="llist-group list-group-flush text-align-center justify-content-center ps-0">
                  <li className="list-group-item border-0 ps-0">03 projects</li>
                  <li className="list-group-item border-0 mt-0 ps-0 pt-0">
                    power And Predictive Dialing
                  </li>
                  <li className="list-group-item ps-0  pt-0 mt-0 border-0">
                    quality & Customer Experience
                  </li>
                  <li className="list-group-item ps-0 pt-0 mt-0 border-0">
                    Try for free,forever !
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 box-shadow">
              <div className="mt-5">
                <img src={free} className="img-fluid" />

                <h2 className="mt-3">Group</h2>
              </div>
              <div className="card-body">
                <h1>
                  <b>$0 </b>
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="llist-group list-group-flush text-align-center justify-content-center ps-0">
                  <li className="list-group-item border-0 ps-0">03 projects</li>
                  <li className="list-group-item border-0 mt-0 ps-0 pt-0">
                    power And Predictive Dialing
                  </li>
                  <li className="list-group-item ps-0  pt-0 mt-0 border-0">
                    quality & Customer Experience
                  </li>
                  <li className="list-group-item ps-0 pt-0 mt-0 border-0">
                    Try for free,forever !
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-outline-info"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="card mb-4 box-shadow">
              <div className="mt-5">
                <img src={free} className="img-fluid" />
                <h2 className="mt-3">Enterprise</h2>
              </div>
              <div className="card-body">
                <h1>
                  <b>$0 </b>
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="llist-group list-group-flush text-align-center justify-content-center ps-0">
                  <li className="list-group-item border-0 ps-0">03 projects</li>
                  <li className="list-group-item border-0 mt-0 ps-0 pt-0">
                    power And Predictive Dialing
                  </li>
                  <li className="list-group-item ps-0  pt-0 mt-0 border-0">
                    quality & Customer Experience
                  </li>
                  <li className="list-group-item ps-0 pt-0 mt-0 border-0">
                    Try for free,forever !
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-outline-info"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div>
            <h2 style={{ fontSize: "48px", color: "#2e3280" }}>
              Trusted services from top-rated company
            </h2>
            <p className="pt-3 ">
              {" "}
              It is about us being able to offer help with the branding
              campaign, product presentation, and advertisement running across
              social media.
            </p>
          </div>
          <div className="row ">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s1} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s2} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s3} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6  pt-5 mt-5">
              <img src={s4} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s5} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s6} alt="image" className="img-fluid" />
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s7} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s8} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s9} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s10} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 pt-5 mt-5">
              <img src={s11} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-5 pt-5">
              <img src={s12} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
        <div
          className="  row pt-5 mt-5 pb-5"
          style={{ backgroundColor: "#b2a1e0" }}
        >
          <div>
            <h2 className=" " style={{ fontSize: "40px", color: "#ffff" }}>
              493 businesses signed up last week.
            </h2>
            <h2 style={{ fontSize: "40px", color: "#ffff" }}>
              {" "}
              Join them! Your name
            </h2>
          </div>
          <div
            className=" row ms-5 me-5 mt-4 justify-content-center"
            style={{
              backgroundColor: "#b2a1e0",
            }}
          >
            <div className="col-md-4 col-sm-12  mt-sm-4 pe-0 m-0">
              <input
                style={{
                  backgroundColor: "#b2a1e0",
                  color: "white",

                  height: "50px",
                }}
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Your name"
              />
            </div>
            <div className="col-md-4 col-sm-12  mt-sm-4 pe-0  ">
              <input
                style={{
                  backgroundColor: "#b2a1e0",
                  color: "white",

                  height: "50px",
                }}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </div>
            <div
              className="col-md-4 col-sm-12 mt-sm-4 ps-0 "
              style={{
                height: "50px",
              }}
            >
              <button
                className="btn  btn-lg"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "200px",
                  height: "50px",
                }}
              >
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5">
          <div className="col-md-3 col-sm-12 mt-sm-4 text-start">
            <img src={logo} className="img-fluid" />

            <ul className="list-group list-group-flush ">
              <li className="list-group-item border-0 padding-0 ">
                our address goes here
              </li>
              <li className="list-group-item border-0 padding-0 ">
                demo@example.com{" "}
              </li>
              <li className="list-group-item border-0 padding-0 ">
                0123456789
              </li>
              <li className="list-group-item border-0 padding-0 ">
                www.example.com
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 mt-sm-4 text-start">
            <h2>Who are we ?</h2>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item border-0 padding-0 ">
                About us ?
              </li>
              <li className="list-group-item border-0 padding-0 ">
                Before you go ?
              </li>
              <li className="list-group-item border-0 padding-0 ">
                online check in
              </li>
              <li className="list-group-item border-0 padding-0 ">FAQ</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 mt-sm-4 text-start">
            <h2>quick links</h2>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item border-0 padding-0 ">
                our address
              </li>
              <li className="list-group-item border-0 padding-0 ">
                demo@example
              </li>
              <li className="list-group-item border-0 padding-0 ">
                0123456789
              </li>
              <li className="list-group-item border-0 padding-0 ">
                www.example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingp;
