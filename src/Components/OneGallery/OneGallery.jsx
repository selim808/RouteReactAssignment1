import React from "react";
import "./OneGallery.css";

export default function OneGallery(props) {
  return (
    <>
      <div
        className="OneGallery col-lg-4 col-md-6"
        onClick={() => {
          props.show(props.image);
        }}>
        <div className="rounded-3 overflow-hidden position-relative">
          <img alt="" className="w-100 rounded-3" src={props.image} />
          <div className="overlay_Gallery position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </div>
    </>
  );
}
