import React from "react";
import Common from "./Common";
import web from "../src/images/about.jpeg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        link="about"
      />
    </>
  );
};

export default About;
