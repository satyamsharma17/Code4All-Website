import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "reactstrap";
import data from "../../data/react-drift";
import react_pdf from './../../assets/pdf/PDF_React_Drift.pdf';
function DriftProjects() {
  const toDate = new Date();
  console.log(toDate);
  // const toDate = '13/01/2022'
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>

      <div className="challanges-container">
        {data.map((item) => {
          var rS = item.regStart;
          let RS = rS.split("/");
          var registerS = new Date(RS[2], RS[0] - 1, RS[1]);
          var rE = item.regEnd;
          let RE = rE.split("/");
          var registerE = new Date(RE[2], RE[0] - 1, RE[1]);
          var sS = item.subStart;
          let SS = sS.split("/");
          var submitS = new Date(SS[2], SS[0] - 1, SS[1]);
          var sE = item.subEnd;
          let SE = sE.split("/");
          var submitE = new Date(SE[2], SE[0] - 1, SE[1]);
          console.log(registerS);
          console.log(toDate);

          return (
            <div className="challange-body">
              <img src="/images/top1.png" className="top-border" />
              <div className="inner-project-div">
                <h4 className="text-center">{item.clgName}</h4>
                <span className="pro-desc">
                  <b>Description</b> - {item.clgDesc}
                </span>

                {toDate >= registerS && toDate <= registerE ? (
                  <>
                    <br></br>
                    <span className="pro-desc">
                      <b>Registration - </b>
                      {rS} to {rE}
                    </span>
                  </>
                ) : null}

                {toDate >= submitS && toDate <= submitE ? (
                  <>
                    <br></br>
                    <span className="pro-desc">
                      <b>Submission - </b>
                      {sS} to {sE}
                    </span>
                  </>
                ) : null}

                <br></br>
                <div className="my-4 btnDiv">
                  <Button
                    color="info"
                    outline
                    className="btn-text mx-1 pro-btns button-34"
                    disabled={toDate >= registerS && toDate <= submitE ? '' :'disabled'}
                    download="" href={react_pdf}
                  >
                    Download Resources
                  </Button>

                  {toDate >= registerS && toDate <= registerE ? (
                    <>
                      <a href={item.clgRes} target="_blank">
                        <Button
                          color="info"
                          outline
                          className="btn-text mx-1 pro-btns button-34"
                        >
                          Register
                        </Button>
                      </a>
                    </>
                  ) : (
                    <Button
                      color="info"
                      disabled
                      outline
                      className="btn-text mx-1 pro-btns"
                    >
                      {toDate > registerS ? "Registration Closed":"Register(Starting Soon)"}
                    </Button>
                  )}
                  {toDate >= submitS && toDate <= submitE ? (
                    <>
                    <a href={item.smbtform} target="_blank">
                      <Button
                        color="info"
                        outline
                        className="btn-text mx-1 pro-btns button-34"
                      >
                        Submit
                      </Button>
                      </a>
                    </>
                  ) : (
                    <Button
                      color="info"
                      disabled
                      outline
                      className="btn-text mx-1 pro-btns "
                    >
                      {toDate > submitS ? "Submission Closed":"Submit(Starting Soon)"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
}
// 403bd5

export default DriftProjects;
