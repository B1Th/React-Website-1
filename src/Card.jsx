import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div
        className="col-md-4 col-10 mx-auto"
        data-aos="fade-down"
        data-aos-delay={props.delay}
        data-aos-easing="linear"
      >
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt="Service Image"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <NavLink to="" className="btn btn-primary">
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
