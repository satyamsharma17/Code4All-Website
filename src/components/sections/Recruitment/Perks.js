import React from 'react'
import './Perks.scss'
export default function Perks() {
  return (
    <>
      <div className='Perks'>
      <h2>Perks</h2>
        <span style={{marginBottom:"25px",textAlign:'center'}}>Here’s how working with Code4all will give you a phenomenal journey.</span>
        <div class="course">
          <div class="course-preview">
            <div class="timeline__event__icon "><i className="fas fa-code"></i></div>
          </div>
          <div class="course-info">
            <h6></h6>
            <h2>Working with Code4all will give you an incredible sense of accomplishment for life.</h2>
          </div>
        </div>
        <div class="course" style={{ flexDirection: "row-reverse" }}>
          <div class="course-preview">
            <div class="timeline__event__icon "><i className="fab fa-font-awesome"></i></div>
          </div>
          <div class="course-info">
            <h6></h6>
            <h2>Every task you do for Code4all will act as an addition to your learning curve.</h2>

          </div>
        </div>
        <div class="course">
          <div class="course-preview">
            <div class="timeline__event__icon "><i className="fas fa-desktop"></i></div>
          </div>
          <div class="course-info">
            <h6></h6>
            <h2>You will learn skills of negotiation and management in an amazing environment.</h2>
          </div>
        </div>
        <div class="course" style={{ flexDirection: "row-reverse" }}>
          <div class="course-preview">
            <div class="timeline__event__icon "><i className="fas fa-network-wired"></i></div>
          </div>
          <div class="course-info">
            <h6></h6>
            <h2>It will be a priceless experience where you will learn, get valuable guidance, interact with many industry experts and enjoy to the fullest.</h2>

          </div>
        </div>
        <div class="course">
          <div class="course-preview">
            <div class="timeline__event__icon "><i className="fab fa-gg"></i></div>
          </div>
          <div class="course-info">
            <h6></h6>
            <h2>You will get incredible real-world exposure and also build a great network.</h2>
          </div>
        </div>

      </div>
    </>
  )
}
