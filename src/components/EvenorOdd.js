import React, { Component } from "react";
import "./Formstyle.css";

export class EvenorOdd extends Component {
  constructor() {
    super();
    this.state = {
      num: "",
      result: "",
    };
  }
  checkReset = () => {
    this.setState({ num: "", result: "" });
  }
  checkNumber = (event) => {
    this.setState({
      num: event.target.value,
    });
  }
  checkOddorEven = () => {
    if (this.state.num) {
      let number = this.state.num;
      if (number % 2 == 0) {
        this.setState({ result: "The number is Even" });
      } else {
        this.setState({ result: "The number is Odd" });
      }
    }
  }
  render() {
    return (
      <div className="formDetails">
        <input
          type="number"
          value={this.state.num}
          onChange={this.checkNumber}
        />
        <h4>{this.state.result}</h4>
        <div style={{ display: "inline-block" }}>
          <button
            style={{ margin: "4px", backgroundColor: "grey" }}
            onClick={this.checkOddorEven}
          >
            Check
          </button>
          <button onClick={this.checkReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default EvenorOdd;
