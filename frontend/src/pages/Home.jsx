import React, { Fragment } from "react";
import './Home.css';
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Footer from "../components/Footer/Footer";

const Home = (props) => {
  return (
    <Fragment style={{display: props.logged==true?'block':'none'}}>
      <Header />
      <HeroSection />
      <hr className="divider mx-5"/>
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
