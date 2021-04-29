import React, { Component } from "react";
import "./Formstyle.css";

class Agetoday extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
    };
    this.handelChange = this.handelChange.bind(this);
    this.calculateDays = this.calculateDays.bind(this);
    this.checkReset = this.checkReset.bind(this);
  }
  handelChange(event) {
    this.setState({
      age: event.target.value,
    });
  }
  calculateDays() {
    if (this.state.age) {
      let ages = this.state.age;
      var days = ages * 365 * 12;
      return days;
    }
  }
  checkReset() {
    this.setState({ age: "" });
  }
  render() {
    let days = this.calculateDays();
    return (
      <div>
        <form className="formDetails" style={{ display: this.state.disp }}>
          Enter your age:{" "}
          <input
            type="number"
            placeholder="Current Age"
            value={this.state.age}
            onChange={this.handelChange}
          />
          <h1>{days}</h1>
          <input
            type="reset"
            name="Reset"
            value="Reset"
            onClick={this.checkReset}
          />
        </form>
      </div>
    );
  }
}

export default Agetoday;
