import React from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { nav } from "bootstrap";
import { Link as Newlink } from "react-scroll";

import styles from "./Navigation.module.scss";

const Navi = () => {
  return (
    <>
      <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <Container fluid>
            <a className="navbar-brand" href="/">
              joenchua
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav px-5">
                <Newlink
                  type="button"
                  className="text-decoration-none"
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  delay={0}
                >
                  <li className="nav-item mx-4">Home</li>
                </Newlink>

                <Newlink
                  type="button"
                  className="text-decoration-none"
                  activeClass="active"
                  to="Works"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  delay={0}
                >
                  <li className="nav-item mx-4">Works</li>
                </Newlink>

                <Newlink
                  type="button"
                  className="text-decoration-none"
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  delay={0}
                >
                  <li className="nav-item mx-4">Contact</li>
                </Newlink>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    </>
  )
};

export default Navi;
