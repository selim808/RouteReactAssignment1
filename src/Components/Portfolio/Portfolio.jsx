import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../../Assets/port1.png";
import img2 from "../../Assets/port2.png";
import img3 from "../../Assets/port3.png";
import OneGallery from "../OneGallery/OneGallery";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  const [Model, setModel] = useState(false);
  const [image, setImage] = useState(null);
  function showModel(img) {
    setModel(true);
    setImage(img);
  }
  function hideModel() {
    setModel(false);
  }
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="container portfolio py-3">
        <div className="text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>
        <div className="row g-5">
          <OneGallery image={img1} show={showModel} />
          <OneGallery image={img2} show={showModel} />
          <OneGallery image={img3} show={showModel} />
          <OneGallery image={img1} show={showModel} />
          <OneGallery image={img2} show={showModel} />
          <OneGallery image={img3} show={showModel} />
        </div>
      </div>
      {Model === true ? (
        <div
          onClick={hideModel}
          className=" PortModel position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center">
          <img
            alt=""
            src={image}
            className="w-50"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
