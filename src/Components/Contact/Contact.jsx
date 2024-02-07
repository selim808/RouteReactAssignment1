import React from "react";
import "./Contact.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [name, setName] = useState(false);
  const [age, setAge] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="container contact">
        <div className="text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            CONATCT SECTION
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          noValidate=""
          action=""
          className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
          <label
            htmlFor="userName"
            className={"position-relative  " + (name ? "top-0" : " __top")}>
            userName
          </label>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            onChange={(e) => {
              e.target.value === "" ? setName(false) : setName(true);
            }}
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <label
            htmlFor="userAge"
            className={"position-relative  " + (age ? "top-0" : " __top")}>
            userAge
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            onChange={(e) => {
              e.target.value === "" ? setAge(false) : setAge(true);
            }}
          />
          <label
            htmlFor="userEmail"
            className={"position-relative  " + (email ? "top-0" : " __top")}>
            userEmail
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            onChange={(e) => {
              e.target.value === "" ? setEmail(false) : setEmail(true);
            }}
          />
          <label
            htmlFor="userPassword"
            className={"position-relative " + (password ? "top-0" : " __top")}>
            userPassword
          </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
            onChange={(e) => {
              e.target.value === "" ? setPassword(false) : setPassword(true);
            }}
          />
          <button className="btn mt-4 text-white sendBtn">
            {" "}
            send Message{" "}
          </button>
        </form>
      </div>
    </>
  );
}
