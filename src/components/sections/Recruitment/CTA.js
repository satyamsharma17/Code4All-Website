import React from "react";
import './CTA.scss'
export default function CTA() {
  return (
    <div className="rec-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Register Yourself </h2>
          <p>
           Register now and stand a chance to become a part of our incredible team and get a priceless experience.
          </p>
          <a style={{cursor:"pointer"}} href="https://bit.ly/3IJTxT4">Apply Now</a>
        </div>
        <div className="img-holder">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_wd1udlcz.json"  background="transparent"  speed="1"  style={{height:'300px',width:'300px'}}  loop  autoplay></lottie-player>
        </div>
      </div>
    </div>
  );
}
