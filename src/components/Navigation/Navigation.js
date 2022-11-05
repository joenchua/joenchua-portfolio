import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link as Newlink } from "react-scroll";
import styles from "./Navigation.module.scss";

const Navi = () => {
  const [isActive, setActive] = useState(null);

  return (
    <>
      <div className={styles.navbar}>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">joenchua</Navbar.Brand>
            <Navbar.Toggle>
              <div onClick = {()=>setActive(!isActive)} className={`${isActive ? 'hamburger-menu hamburger-menu-active' : 'hamburger-menu'}`}>
                <div className='hamburger-menu-wrapper'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="mr-auto">
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
                  <li className="nav-item mx-4 my-2-md py-2">Home</li>
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
                  <li className="nav-item mx-4 my-2-md py-2">Works</li>
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
                  <li className="nav-item mx-4 my-2-md py-2">Contact</li>
                </Newlink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
};

export default Navi;
