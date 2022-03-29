import React from "react";
import CourseCategories from "../CourseCategories/CourseCategories";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <CourseCategories />
      <Courses />
    </>
  );
};

export default Home;
