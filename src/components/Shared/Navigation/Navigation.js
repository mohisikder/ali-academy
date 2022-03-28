import React from "react";
import "./Navigation.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <section className="header__top bg-dark">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="header__top--info d-flex justify-content-between">
                <div className="header__phone">
                  <p className="pt-3">
                    {" "}
                    <FaPhoneAlt className="me-2 header-icon" />
                    +880123456987
                  </p>
                </div>
                <div className="header-social pt-3">
                  <a className="me-3" href="#">
                    <FaFacebookSquare className="fs-3" />
                  </a>
                  <a className="me-3" href="#">
                    <FaInstagramSquare className="fs-3" />
                  </a>
                  <a href="#">
                    <FaTwitterSquare className="fs-3" />
                  </a>
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
          variant="dark"
          style={{ background: "#07d475" }}
          shadow-lg
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="#home">Intementor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="me-3" href="#features">
                  Home
                </Nav.Link>
                <Nav.Link className="me-3" href="#pricing">
                  About us
                </Nav.Link>
                <Nav.Link className="me-3" href="#pricing">
                  Services
                </Nav.Link>
                <Nav.Link className="me-3" href="#pricing">
                  Projects
                </Nav.Link>
                <Nav.Link className="me-3" href="#pricing">
                  Blog
                </Nav.Link>
                <Nav.Link className="me-3" href="#pricing">
                  Shop
                </Nav.Link>
                <Nav.Link href="#pricing">Contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Navigation;
