import React from "react";
import CourseCategories from "./CourseCategories/CourseCategories";
import Courses from "./Courses/Courses";
import Header from "./Header/Header";
import Faq from "./Faq/Faq";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <Header />
      <CourseCategories />
      <Courses />
      <Faq />
      <NewsLetter />
    </>
  );
};

export default Home;
