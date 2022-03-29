import React from "react";
import "./Navigation.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <section className="header__top bg-dark">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="header__top text-white d-flex justify-content-between">
                <div className="toolbar d-flex align-items-center">
                  <p className="me-4 have__any">Have any questions?</p>
                  <p>
                    {" "}
                    <FaPhone className="me-2" />
                    +8801236 147 258
                  </p>
                  <p className="ms-4">
                    <FaEnvelope className="me-2" /> info@aliacademy.com
                  </p>
                </div>
                <div className="login">
                  <Nav className="btn btn-primary">
                    <Link to="/login">Login</Link>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          shadow-lg
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="/">
              Ali-<span className="logo__color">Academy</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="me-3" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="me-3" href="about">
                  About
                </Nav.Link>
                <Nav.Link className="me-3" href="courses">
                  Courses
                </Nav.Link>
                <Nav.Link className="me-3" href="features">
                  Features
                </Nav.Link>
                <Nav.Link className="me-3" href="events">
                  Events
                </Nav.Link>
                <Nav.Link className="me-3" href="blog">
                  Blog
                </Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Navigation;
