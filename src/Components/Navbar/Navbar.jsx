import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos);
      if (currentScrollPos > 20) {
        setSmall(true); // Show navbar
      } else {
        setSmall(false); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  return (
    <>
      <nav
        className={
          " navbar navbar-expand-lg text-white nav position-sticky fixed-top " +
          (small === true ? "py-2" : "py-4")
        }>
        <div className="container text-white">
          <NavLink
            className="navbar-brand text-white fs-2 fw-bold text-uppercase"
            to="">
            Start Framework
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink
                  aria-current="page"
                  to="about"
                  className="nav-NavLink fs-6 fw-bold text-uppercase p-2">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-NavLink fs-6 fw-bold text-uppercase p-2"
                  to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-NavLink fs-6 fw-bold text-uppercase p-2"
                  to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
