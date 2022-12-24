import React from 'react'
import './Landing.css';
export default function Landing() {
  return (
    <div className='recruitment-landing' style={{
      backgroundImage: `url('/images/landingre.png')`,
      backgroundSize: "100% 100%",

      }}>
        <div className='rec-hero'>
            <div className='content p-5'>
                <h1>We are Recruiting!</h1>
                <p >For the very first time, Code4all has opened recruitments for students. Register now and stand a chance to become a part of our incredible team and get a priceless experience. </p>
                <div className='button-container'>
                {/* <a href='https://bit.ly/3IJTxT4'>Apply Now </a> */}
                </div>
            </div>
        </div>
    </div>
  )
}
