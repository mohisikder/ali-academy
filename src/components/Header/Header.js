import React from "react";
import "./Header.css";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <section className="header__section">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={8} xs={12}>
              <div className="header__info">
                <div className="header__title">
                  <h1>
                    {" "}
                    <span className="title">The best time for</span> Education
                  </h1>
                </div>
                <Button>Buy Now</Button>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="buy__early__form">
                <div className="form__title">
                  <h3>
                    Create your free account now and get immediate access to
                    100s of online Courses.
                  </h3>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control type="phone" placeholder="Your Phone" />
                  </Form.Group>
                  <button className="btn form-control" type="submit">
                    get it now
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
