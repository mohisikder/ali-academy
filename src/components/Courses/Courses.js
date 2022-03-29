import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Courses.css";

import { FaUsers, FaRegComment } from "react-icons/fa";
import CoursesOne from "./../../assets/images/courses/course-4.jpg";

const Courses = () => {
  return (
    <>
      <div className="courses__section">
        <Container>
          <div className="section__title">
            <h3>Popular Courses</h3>
            <div className="underline"></div>
          </div>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <Card className="shadow">
                  <div className="course__info text-center">
                    <div className="course__img">
                      <Card.Img variant="top" src={CoursesOne} alt="" />
                    </div>
                    <div className="course__details">
                      <a href="#">
                        <Button>Read More</Button>
                      </a>
                    </div>
                    <Card.Body>
                      <div className="course__item">
                        <div className="author">
                          <div className="author__img">
                            <img src="" alt="" />
                          </div>
                          <div className="author__name">
                            <p>Mohi Uddin</p>
                          </div>
                        </div>
                        <a href="#">
                          <h5>Zero to Hero with Nodejs</h5>
                        </a>
                      </div>
                      <div className="card__border">
                        <div className="card__border__middle"></div>
                      </div>
                      <div className="course__buy d-flex justify-content-between mb-3">
                        <div className="course__total__by d-flex">
                          <p className="me-4">
                            {" "}
                            <FaUsers className="me-2 fs-5" /> 275
                          </p>
                          <p className="me-4">
                            {" "}
                            <FaRegComment className="me-2 fs-5" />0
                          </p>
                        </div>
                        <div className="course__fee">
                          <p className="free">Free</p>
                        </div>
                      </div>
                      <Button>Enroll Now</Button>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Courses;
