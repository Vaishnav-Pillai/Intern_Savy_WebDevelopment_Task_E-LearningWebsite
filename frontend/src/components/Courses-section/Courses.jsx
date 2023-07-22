import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.avif";
import courseImg2 from "../../assests/images/graphics-design.jpg";
import courseImg3 from "../../assests/images/backend-development.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design Essentials for Beginners",
    lesson: 19,
    students: 24.1,
    rating: 6.8,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Graphic Designing with Adobe Photoshop and Figma",
    lesson: 23,
    students: 11.6,
    rating: 7.3,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Backend Development for Beginners with MongoDB, Node and Express",
    lesson: 14,
    students: 15.4,
    rating: 6.2,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Most Approaching Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
