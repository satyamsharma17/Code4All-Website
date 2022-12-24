import React from "react";

export default function DriftTimeline() {
  return (
    <>
      {/* <div className="container">
        <div className="timeline">
          <div className="timeline-container primary">
            <div className="timeline-icon">
              <i className="far fa-grin-wink" />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Registration</span>
              </h4>
              <p>
              All students will be given a registration form, which they will have to fill for registering themselves for React Drift. This registration will allow them to join the doubt solving group which will be a perpetually helpful resource.
              </p>
              <p className="timeline-subtitle">1 Hours Ago</p>
            </div>
          </div>
         
          <div className="timeline-container primary">
            <div className="timeline-icon">
              <i className="far fa-grin-tears" />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Learning</span>
              </h4>
              <p>
              After the registration, the students will be given various learning resources in the form of articles and videos. We will support all students so that everyone learns the various libraries and frameworks to their satisfaction.
              </p>
              <p className="timeline-subtitle">6 Hours Ago</p>
            </div>
          </div>
          <div className="timeline-container primary">
            <div className="timeline-icon">
              <i className="far fa-grimace" />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Submission</span>
              </h4>
              <p>
              At this point, you will already be a React Developer (add that to your CV and then read further ), so now finally you will have to make the project and submit your entries so that you may be considered for the prizes in another form.
              </p>
              <p className="timeline-subtitle">1 Day Ago</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="timeline-container">
        <div className="timeline-body">
          <img
            src="./images/borders/top.png"
            alt="timeline"
            class="img-border"
          />
          <h4 className="timeline-title">Registration</h4>
          <p>
            All students will be given a registration form, which they will have to fill for registering themselves for React Drift. This registration will allow them to join the doubt solving group which will be a perpetually helpful resource.

          </p>
        </div>
        <div className="timeline-body">
          <img
            src="./images/borders/left.png"
            alt="timeline"
            class="img-border"
          />
          <img
            src="./images/borders/right1.png"
            alt="timeline"
            class="img-border"
          />

          <h4 className="timeline-title">Learning</h4>
          <p>
          After the registration, the students will be given various learning resources in the form of articles and videos. We will support all students so that everyone learns the various libraries and frameworks to their satisfaction.
          </p>
        </div>
        <div className="timeline-body">
          <img
            src="./images/borders/bottom.png"
            alt="timeline"
            class="img-border"
          />
          <h4 className="timeline-title">Submission</h4>
          <p>
          At this point, you will already be a React Developer (add that to your CV and then read further ), so now finally you will have to make the project and submit your entries so that you may be considered for the prizes in another form.

          </p>
        </div>
      </div>
    </>
  );
}
