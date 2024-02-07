import React from "react";
import "./Home.css";
import avatar from "../../Assets/avataaars.svg";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home d-flex justify-content-center align-items-center text-white mb-0 py-3">
        <div className="text-center">
          <img src={avatar} alt="" className="mb-3" />

          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              start Framework
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
          </div>

          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
