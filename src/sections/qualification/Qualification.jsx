import React, { useEffect, useState } from "react";
import { baseQualification, certifications } from "../../constants";
import { Slider, Tabs } from "../../components";
import "./qualification.css";

const Qualification = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  let perviewValue = windowWidth <= 768 ? 1 : 4;
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{baseQualification.title}</h2>
      <p className="section__subtitle">{baseQualification.subtitle}</p>
      <Tabs />

      <Slider
        origin={certifications}
        direction={true}
        delay={1000}
        perview={perviewValue}
        base="slider"
      />
    </section>
  );
};

export default Qualification;
