import React from 'react';
import { contests } from "./data";
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import SectionHeader from '../components/sections/partials/SectionHeader';
import './Contest.css';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Home = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Code4All Contests',
    paragraph: ''
  };

  const showMdl =(e)=>{
    document.getElementById(e).classList.remove("d-none");
  }

  const hideMdl =(e)=>{
    document.getElementById(e).classList.add("d-none");
  }

  return (
    <>
      <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <table className="tableClass">
            <thead>
              <tr>
                <td>&nbsp;Code</td>  
                <td>Name</td>  
                <td>Date</td>  
                <td>Status</td>  
              </tr>
            </thead>  
            <tbody>
            {contests.map((data, key) => {
              return (
                <tr className="rowClass" data-mdl={data.cc} onClick={()=>{showMdl(data.cc)}}>
                  <td>&nbsp;{data.cc}</td>
                  <td>{data.cn}</td>
                  <td>{data.sd}</td>
                  <td>{data.cs}</td>
                </tr>
                );
              })}
            </tbody>
          </table>   
          </div>
        </div>
      </div>
    </section>   


    {contests.map((data, key) => {
      return (
        <div id={data.cc} className="mdl-container d-none">
          <div className="mdl-box">
            <div
              className="closeBtn"
              onClick={() => {
                hideMdl(data.cc);
              }}
            >
              &times;
            </div>
            
              <h6
                className="textBlack"
                style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.2em" }}
              >
                Contest : {data.cc}
              </h6>
            
            <h6 className="textBlack my-2">
              <strong>Start Date : </strong> {data.sd}
            </h6>
            <h6 className="textBlack my-2">
              <strong>Start Time : </strong> {data.st}
            </h6>
            <h6 className="textBlack my-2">
              <strong>End Date : </strong> {data.ed}
            </h6>
            <h6 className="textBlack my-2">
              <strong>End Time : </strong> {data.et}
            </h6>
            <h6 className="textBlack my-2">
              <strong>Status : </strong> {data.cs}
            </h6>
            <h6 className="textBlack my-2">
              <strong>Link : </strong>{" "}
              <a
                className="textBlue"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.link}
              </a>
            </h6>
            <h6 className="textBlack my-2">
              <strong>Winner 1 : </strong> {data.w1}
            </h6>
            <h6 className="textBlack my-2">
              <strong>Winner 2 : </strong> {data.w2}
            </h6>
            <h6 className="textBlack my-2">
              <strong>Winner 3 : </strong> {data.w3}
            </h6>
            <h6 className="textBlack my-2">
              <strong>Winner 4 : </strong> {data.w4}
            </h6>
          </div>
        </div>
      );
    })}
    </>
  );
}

export default Home;
