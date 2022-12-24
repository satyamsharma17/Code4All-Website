
import React from "react";
import "./Team.css";

import SectionHeader from "../components/sections/partials/SectionHeader";

const Home = () => {
  const teamMembers = [
    [
      "Hritik",
      "Kumar",
      "Co-Founder",
      "https://www.linkedin.com/in/hritik-kumar-5a024a196/",
    ],
    [
      "Yash",
      "Gupta",
      "Co-Founder",
      "https://www.linkedin.com/in/yasx/",
    ],
    [
      "Ansh",
      "Shrivastava",
      "Co-Founder",
      "https://www.linkedin.com/in/ansh-shrivastava0911/",
    ],
     [
      "Nikhil",
      "Jain",
      "Co-Founder",
      "https://www.linkedin.com/in/nikhil-jain-84842816a/",
    ],
    [
      "Manas",
      "Mishra",
      "Head Coordinator",
      "https://www.linkedin.com/in/manasmishra2202/",
    ],
    [
      "Sanskriti",
      "Gupta",
      "Lead Coordinator",
      "https://www.linkedin.com/in/sanskriti-gupta-96762b1b",      
    ],
    [
      "Yash",
      "Ketan Agnihotri",
      "Lead Coordinator",
      "https://www.linkedin.com/in/yashketan",      
    ],
    [
      "Mitali",
      "Gandhi",
      "Lead Coordinator",
      "https://www.linkedin.com/in/themitaligandhi",      
    ],
    [
      "Milan",
      "Yadav",
      "Media Content Facilitator",
      "https://www.linkedin.com/in/themitaligandhi",      
    ],
    [
      "Chetna",
      "Patel",
      "Coordinator",
      "https://www.linkedin.com/in/chetna-patel-365804225",      
    ],
    [
      "Jay Wardhan",
      "Mourya",
      "Coordinator",
      "https://www.linkedin.com/in/jay-wardhan-mourya-9736ab22b",      
    ],
    [
      "Khushi",
      "Jain",
      "Coordinator",
      "https://www.linkedin.com/in/khushi-jain-112951253",      
    ],
    [
      "Satyam",
      "Sharma",
      "Web Developer",
      "https://www.linkedin.com/in/iamsatyam17",      
    ],
    [
      "Manish",
      "Singh",
      "Web Developer",
      "https://www.linkedin.com/in/manish-singh-b96511229",      
    ],
    [
      "Atharv",
      "Gupta",
      "Web Developer",
      "https://www.linkedin.com/in/atharva-gupta-762972256",      
    ],
    [
      "Aditi",
      "Shrivastava",
      "Web Developer",
      "https://www.linkedin.com/in/aditi-shrivastava-120901233",      
    ],
    [
      "Pulkit",
      "Dubey",
      "Graphic Designer",
      "https://www.linkedin.com/in/pulkit-dubey-75b703224/",      
    ],
    [
      "Akshat",
      "Sharma",
      "Graphic Designer",
      "https://www.linkedin.com/in/pulkit-dubey-75b703224/",      
    ],
    [
      "Apurv",
      "Jain",
      "Video Editor",
      "https://www.linkedin.com/in/apurvjain619/",      
    ],
    [
      "Nikita",
      "Verma",
      "Content Writer",
      "https://www.linkedin.com/in/nikita-verma-3a3355225",      
    ],
    [
      "Anjali",
      "Upadhyay",
      "Content Writer",
      "https://www.linkedin.com/in/anjali-upadhyay-464004161",      
    ],
  ];

  const sectionHeader = {
    title: "Team Code4All",
    paragraph:
      "We are an enthusiastic group of coders. We want to replace code anxiety and fear with inspiration and motivation to learn. Our team comprises a problem setter, a technical department, administration/ operations, graphic designers, content curation and video editors. One more important thing, also we are not some so-called Web-Developers but still, we know how to edit templates.",
  };
  return (
    <>
      <div className="team-heading">
        <SectionHeader data={sectionHeader} className="center-content" />
      </div>

      <div className="team_cardholder">
        {teamMembers.map(function (member, i) {
          return (
            <div
              className="team_teamcard"
              style={{ marginTop: "50px", zIndex: "1" }}
            >
              <div
                className="team_imgholder"
                style={{ marginTop: "50px", zIndex: "3000" }}
              >
                <div className={`bb bb-${i}`}></div>
              </div>
              <div className="team_content" style={{ zIndex: "1000" }}>
                <h2>{member[0]}</h2>
                <h2>{member[1]}</h2>
                <h4>{member[2]}</h4>
                <div className="team_social">
                  <i
                    className="fab fa-linkedin"
                    style={{ cursor: "pointer", zIndex: "3000" }}
                    onClick={() => {
                      window.location.href = member[4];
                    }}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
