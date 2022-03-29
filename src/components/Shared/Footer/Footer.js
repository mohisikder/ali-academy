import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <Container>
          <Row>
            <Col md={4} xm={12}>
              <div className="footer-info">
                <h2 className="mb-4">
                  Ali-<span className="logo__color">Academy</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis illum nihil distinctio iusto expedita? Voluptatibus
                  architecto, ex nemo labore officiis repellat et accusamus
                  saepe, culpa provident debitis modi dignissimos maiores.
                </p>
              </div>
              <div className="social-link">
                <a className="fs-2 me-3 text-white" href="#">
                  <FaFacebookSquare />
                </a>
                <a className="fs-2 me-3  text-white" href="#">
                  <FaInstagramSquare />
                </a>
                <a className="fs-2 me-3  text-white" href="#">
                  <FaTwitterSquare />
                </a>
              </div>
            </Col>
            <Col md={4} xm={12}>
              <h4 className="footer-title">Improtant Links</h4>
              <div className="important-link mt-4">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Popular Course</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} xm={12}>
              <h4>Corporate Office</h4>
              <div className="company-address mt-4">
                <address>
                  <p>Motijhil, Dhaka, Bangladesh</p>
                  <p>Email: info@Intementor.com</p>
                  <p>Phone: +880123654789</p>
                </address>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer-bottom text-center pt-4 pb-2">
        <p>
          Copyrights &copy; 2022 | Made by <a href="#">Mohiuddin Sikder</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
