import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CourseCategories.css";

import FrontEnd from "./../../../assets/images/bg-1.jpg";

const CourseCategories = () => {
  return (
    <>
      <div className="course__categories">
        <Container>
          <Row xs={12} md={6} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <div className="courses__info">
                  <div className="courses__img">
                    <img src={FrontEnd} alt="" />
                  </div>

                  <div className="courses__title">
                    <h4>FrontEnd </h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CourseCategories;
