import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-design.avif";
import courseImg02 from "../../assests/images/graphics-design.jpg";
import courseImg03 from "../../assests/images/kids-learning.png";
import courseImg04 from "../../assests/images/seo.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Designing Course",
    imgUrl: courseImg01,
    students:7.5,
    rating: 2.3,
  },
  {
    id: "02",
    title: "Basic Graphics Designing Course",
    imgUrl: courseImg02,
    students: 5.9,
    rating: 3.2,
  },

  {
    id: "03",
    title: "Basic HTML/CSS",
    imgUrl: courseImg03,
    students: 2.1,
    rating: 3.7,
  },

  {
    id: "04",
    title: "Basics of SEO",
    imgUrl: courseImg04,
    students: 2.6,
    rating: 2.4,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">We Provide Free Courses Too!</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
