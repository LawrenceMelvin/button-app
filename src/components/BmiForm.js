import React from "react";
import "./Formstyle.css";
import Result from "./Result";
class BmiForm extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
    };
    this.handeleWeigthChange = this.handeleWeigthChange.bind(this);
    this.handleHeigthChange = this.handleHeigthChange.bind(this);
  }
  handeleWeigthChange(event) {
    this.setState({
      weight: event.target.value,
    });
  }
  handleHeigthChange(event) {
    this.setState({
      height: event.target.value,
    });
  }
  calculateBMI() {
    if (this.state.weight && this.state.height) {
      let height = this.state.height;
      let weigth = this.state.weight;
      var mtocm = height / 100;
      var bmi = weigth / (mtocm * mtocm);
      bmi = bmi.toFixed(2);
      return bmi;
    }
  }
  getBMIResults(bmi) {
    let bmiResults = {
      label: "",
      alertClass: "",
    };

    if (bmi <= 18.5) {
      bmiResults.label = "Underweight";
      bmiResults.alertClass = "alert-danger";
    } else if (bmi <= 24.9) {
      bmiResults.label = "Normal weight";
      bmiResults.alertClass = "alert-success";
    } else if (bmi <= 29.9) {
      bmiResults.label = "Overweight";
      bmiResults.alertClass = "alert-warning";
    } else if (bmi >= 30) {
      bmiResults.label = "Obesity";
      bmiResults.alertClass = "alert-danger";
    } else {
      bmiResults.label = "BMI";
      bmiResults.alertClass = "alert-primary";
    }
    return bmiResults;
  }
  render() {
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);
    return (
      <div>
        <form className="formDetails">
          Weigth:
          <input
            type="number"
            name="weigth"
            placeholder="Enter your weigth in Kgs"
            value={this.state.weight}
            onChange={this.handeleWeigthChange}
          />
          <br />
          Heigth:
          <input
            type="number"
            name="heigth"
            placeholder="Enter your Heigth in cms"
            value={this.state.height}
            onChange={this.handleHeigthChange}
          />
          <br />
          <Result
            bmi={bmi}
            label={results.label}
            alertClass={results.alertClass}
          />
        </form>
      </div>
    );
  }
}

export default BmiForm;
