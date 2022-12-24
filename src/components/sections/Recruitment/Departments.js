import React from "react";
import "./Departments.scss";

export default function Departments() {
  // Admins
  // Problem Setter
  // Web Development
  // App Development
  // Design and Video Editing
  const DEPARTMENTS = [
    {
      name: " Problem Setter",
      icon: "https://cdn.lordicon.com/eszyyflr.json",
      desc: "A problem setter is a programming mastermind who can create innovative technical problem statements. Their passion for programming and admirably strong problem-solving skills sets them apart. A nonchalant nature, efficiency in work and coordination with the team members will ensure a great journey with Code4all.",
    },
    {
      name: "Operation/ Admins",
      icon: "https://cdn.lordicon.com/zpxybbhl.json",
      desc: "The Operations/Admin Administrations Department acts as the backbone of an organization. The Operations Manager is in charge of ensuring smooth coordination between various other departments and managing the competitions organized by Code4all. Strategic planning and strong communication and organizational skills will pave the way for immaculate administration.",
    },

    {
      name: "Web Development",
      icon: "https://cdn.lordicon.com/qhgmphtg.json",
      desc: "A web developer has niche knowledge of web development and is responsible for maintaining the website. Their strong creative ability and logical approach to work serve as an added bonus. A website is a virtual representation of an organization and web developers will have the immense responsibility of ensuring the website’s functionality.",
    },

    {
      name: "Design and Video Editing",
      icon: "https://cdn.lordicon.com/vixtkkbk.json",
      desc: "A graphic designer and video editor have the ability to transform creative imaginations and ideas into visually appealing reality. Bringing everyone’s ideas to life with an exquisite presentation to the audience is the distinguishing characteristic of a graphic designer and video editor. Creative ability and time management will ensure a great time with Code4all.",
    },
  ];

  return (
    <div className="rec-dep" style={{marginTop:'5rem'}}>
      <div className="dep-container">
        <h2>Departments You can Apply</h2>
        <span>Based on their skills, students can apply for different departments as follows</span>
        <div className="dep-content">
          {DEPARTMENTS.map((dep) => (
            <div className="dep-item">
              <lord-icon
    src={dep.icon}
    trigger="loop"
    
    colors="primary:#24B47E,secondary:#08a88a"
    style={{width:'100px',height:'100px'}}>
</lord-icon>
              <h3>{dep.name}</h3>
              <span>{dep.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
