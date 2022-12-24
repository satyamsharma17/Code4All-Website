import React from "react";
import "./reactdrift.scss";
import "./reactdrift.css";

import DriftTimeline from "../components/sections/DriftTimeline";
import { Container, Row, Col, Button } from "reactstrap";
import DriftProjects from "../components/sections/DriftProjects";
import Driftfaqs from "../components/sections/Driftfaqs";
import aboutImg from "./../assets/images/pc-01.png";
import Particles from "react-tsparticles";
import ParticleJSON from "../data/jsparticles.json";

export default function reactdrift(props) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  function createSnowflake() {
    const snowflake = document.createElement("i");
    const width = Math.random() * 10 + 10;
    let leftpos = Math.random() * window.innerWidth - width - 25;
    if (leftpos < 0) {
      leftpos = width + 25;
    }
    snowflake.classList.add("far");
    snowflake.classList.add("fa-snowflake");
    snowflake.style.width = width + "px";
    snowflake.style.left = leftpos + "px";
    snowflake.style.animationDuration = Math.random() * 1 + 10 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 2 + "em";

    if (document.getElementById("snow")) {
      document.getElementById("snow").appendChild(snowflake);
    }

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  // 1246 - 80
  // 628 - 160
  // 320 -
  //   if (props.location.pathname === "/react-drift") {
  //     setInterval(createSnowflake, 300000 / windowWidth);
  //   }
  return (
    <>
      <div
        className="snow"
        id="snow"
        style={{
          backgroundImage: `url('/images/transbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div class="conteiner"></div>

        <div class="react-loader">
            <Particles url="assets/jsparticles.json" />

          <section>
            <div class="react-loader-body">
              <div class="loader">
                <div class="core"></div>
                <div class="elip elip1"></div>
                <div class="elip elip2"></div>
                <div class="elip elip3"></div>
              </div>
              <div class="loader shadow">
                <div class="core"></div>
                <div class="elip elip1"></div>
                <div class="elip elip2"></div>
                <div class="elip elip3"></div>
              </div>
            </div>
            <div class="react-drift-text">
              React Drift
              {/* <p>
                                React Before It's Too Late
                            </p> */}
            </div>
          </section>
        </div>
      </div>
      {/* ABout section */}
      <img
        src="/images/toplayer.png"
        style={{}}
        className="aboutImg text-center"
      />
      <div id="tsparticles"></div>
      <Container>
        <Row>
          <Col md={5}>
            <img src="/images/logo-snow.png" className="aboutImg text-center" />
          </Col>
          <Col lg={7}>
            <div className="about-section text-center text-md-start mb-5">
              <div>
                <h3 className="about-heading">About React Drift</h3>
                <p className="about-section-text">
                  React Drift is not just any contest, it is a one-stop solution
                  for anyone interested in learning development. This will be a
                  series of various exciting contests where students can learn
                  various concepts of development and then build an amazing
                  project based on that. All the learning resources will be
                  provided to all participants. A descriptive code-along video
                  will also be given to assist budding developers in executing
                  the tasks at hand. A doubt-solving group will be made, where
                  students can ask their doubts from our mentors.
                </p>
                <a href="#learning">
                  <Button color="info" outline className="btn-text button-34">
                    Start Learning <i class="fas fa-play-circle"></i>
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <h3 className="text-center mt-3  titleline" style={{marginBottom:'2em'}}>Learning Process</h3>
      <div className="timeline-body-container px-3">
        <DriftTimeline />
      </div>
      <img src="images/trees.png" alt="t-w" width="100%" />
      <h3 className="text-center my-2 titleline">Challenges</h3>
      <div className="projects_parent_div" id="learning">
        <DriftProjects />
      </div>
      <h3 className="text-center mt-5 titleline">FAQs</h3>
      <div className="mt-5 faqs-body">
        <Driftfaqs />
      </div>
      <img
        src="/images/footer-01.png"
        style={{ width: "100%", marginTop: "-40vh" }}
        className="aboutImg text-center"
      />
    </>
  );
}
