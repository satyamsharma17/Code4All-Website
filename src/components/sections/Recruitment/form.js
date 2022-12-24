import React, { Component } from "react";
import "./form.css";
export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      wphone: "",
      yearofgrad: "",
      branch: "",
      resume: "",
      position: "",
      anything: "",
    };
  }
  Handlename = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  Handleemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  Handlewphone = (event) => {
    this.setState({
      wphone: event.target.value,
    });
  };
  Handleyearofgrad = (event) => {
    this.setState({
      yearofgrad: event.target.value,
    });
  };
  Handlebranch = (event) => {
    this.setState({
      branch: event.target.value,
    });
    console.log(this.state.branch);
  };

  Handleresume = (event) => {
    this.setState({
      resume: event.target.value,
    });
  };
  Handleposition = (event) => {
    this.setState({
      position: event.target.value,
    });
    console.log(this.state.position);
  };
  Handleanything = (event) => {
    this.setState({
      anything: event.target.value,
    });
  };
  onsubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    fetch("https://ecellrgpv.com/api/code4all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Your response has been recorded. Thank you for your time!");
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      name: "",
      email: "",
      wphone: "",
      yearofgrad: "",
      branch: "",
      resume: "",
      position: "",
      anything: "",
    });
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="card">
            <div class="card-title">
              <h1>Recruitment Form</h1>
            </div>
            <form onSubmit={this.onsubmit} class="card-form">
              <div class="input">
                <input
                  type="text"
                  class="input-field"
                  value={this.state.name}
                  onChange={this.Handlename}
                  required
                />
                <label class="input-label">Full name</label>
              </div>
              <div class="input">
                <input
                  type="text"
                  class="input-field"
                  value={this.state.email}
                  onChange={this.Handleemail}
                  required
                />
                <label class="input-label">Email</label>
              </div>
              <div class="input">
                <input
                  type="text"
                  class="input-field"
                  value={this.state.wphone}
                  onChange={this.Handlewphone}
                  required
                />
                <label class="input-label">Whatsapp Phone Number</label>
              </div>
              <div class="input">
                <input
                  type="text"
                  class="input-field"
                  value={this.state.yearofgrad}
                  onChange={this.Handleyearofgrad}
                  required
                />
                <label class="input-label">
                  Year of Graduation (Eg: 20XX){" "}
                </label>
              </div>

              {/* <div class="input">
                <input

                    type="text"
                    class="input-field"
                    value={this.state.branch}
                    onChange={this.Handlebranch}
                    required
                />
                <label class="input-label">Branch</label>
                </div> */}
              {/*dropdown for branch */}
              <div class="input">
                <select
                  type="text"
                  class="input-field branch"
                  value={this.state.branch}
                  onChange={this.Handlebranch}
                  required
                >
                  <option value="null">Select Branch</option>
                  <option value="Computer Science & Engineering">
                    Computer Science & Engineering
                  </option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="Electronics & Communication Engineering">
                    Electronics & Communication Engineering
                  </option>
                  <option value="Electrical & Electronics Engineering">
                    Electrical & Electronics Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Automobile Engineering">
                    Automobile Engineering
                  </option>
                  <option value="Petrochemical Engineering">
                  Petrochemical Engineering
                  </option>
                  <option value="Computer Science & Business Systems">
                    Computer Science & Business Systems
                  </option>
                </select>
                <label class="input-label">Branch</label>
              </div>

              <div class="input">
                <input
                  type="text"
                  class="input-field"
                  value={this.state.resume}
                  onChange={this.Handleresume}
                  required
                />
                <label class="input-label">
                  Resume Link
                </label>
              </div>
              {/* <div class="input">
                <input

                    type="text"
                    class="input-field"
                    value={this.state.position}
                    onChange={this.Handleposition}
                    required
                />
                <label class="input-label">Position</label>
                </div> */}
              <div class="input">
                <select
                  type="text"
                  class="input-field branch"
                  value={this.state.position}
                  onChange={this.Handleposition}
                  required
                >
                  <option value="null">Select Position</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Coordinator">Coordinator</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Problem Setter">Problem Setter</option>
                  <option value="Content Curator">Content Curator</option>
                </select>
                <label class="input-label">
                  Which position are you applying for?
                </label>
              </div>
              <div class="input">
                <input
                  type="text"
                  class="input-field"
                  value={this.state.anything}
                  onChange={this.Handleanything}
                />
                <label class="input-label">
                  Anything else you would like us to know?
                </label>
              </div>

              <div class="action">
                <button type="submit" class="action-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
