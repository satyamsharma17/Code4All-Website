import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import "./Hero.css";
import light from "../../assets/images/C4A_landing_edited-01.png";
import logo from "../../assets/images/C4A_Landing_Logo-02.png";

import { contestData } from "../../views/contestLink";
import LandingPlatform from "../../assets/images/homeimg.jpg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color"
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const styles = {
    marginTop: "4px",
    marginRight: "5px",
  };

  const spaces = {
    marginBottom: "10vh",
    minHeight: "100vh",
  };

  const sizeClass = {
    fontSize: "3.5rem",
    marginTop: "-20px",
    marginBottom: "50px",
    fontWeight: "bold",
    fontFamily: "'poppins', sans-serif",
  };

  return (
    <section id="home" {...props} className="heroMainSectionDiv">
      <div className="heroLandingLeftMain">
        <div className="light">
          <img src={light} className="landing-light light-bg" />
          <img src={logo} className="landing-light logo logoAnimate" />
        </div>
      </div>
      <div className="heroLandingRightMain">
        <div className="container landingLeft" style={{ width: "100%" }}>
          <h1 style={sizeClass} className="mt-0 " data-reveal-delay="200">
            Code4<span className="text-color-primary">All</span>
          </h1>
          <p
            className="m-0 reveal-from-bottom landingTextClass"
            data-reveal-delay="400"
          >
            Code your way to success!
            <br/>
            Enhance the way you code, accelerate your coding journey and achieve high with us.
          </p>
          <ButtonGroup className="heroBtnGrp" style={{ marginTop: "20px" }}>
            <Button
              tag="a"
              color="primary"
              wideMobile
              href="https://www.linkedin.com/company/code4all-rgpv/"
              style={{ zIndex: "3000" }}
            >
              <i class="fab fa-linkedin" style={styles}></i>LinkedIn
            </Button>
            <Button
              tag="a"
              color="dark"
              wideMobile
              href="https://www.instagram.com/code4all_rgpv/"
              style={{ zIndex: "3000" }}
            >
              <i class="fab fa-instagram" style={styles}></i>Instagram
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
