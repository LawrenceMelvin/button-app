import { Search } from "@material-ui/icons";
import React, { Component } from "react";
import Agetoday from "./Agetoday";
import BmiForm from "./BmiForm";
import "./Button.css";
import Counter from "./Counter";
import EvenorOdd from "./EvenorOdd";
import Liveclock from "./Liveclock";
import Mirror from "./Mirror";
import MonthlyExpense from "./MonthlyExpense";
import Notification from "./Notification";
import PrimeorNot from "./PrimeorNot";

class Button extends Component {
  constructor() {
    super();
    this.searchCheck = this.searchCheck.bind(this);
    this.keyboardEntry = this.keyboardEntry.bind(this);
    this.finding = this.finding.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeAlert = this.changeAlert.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changemirror = this.changemirror.bind(this);
    this.changeExpense = this.changeExpense.bind(this);
    this.changePrime = this.changePrime.bind(this);
    this.changeCounter = this.changeCounter.bind(this);
    this.closeAppAlert = this.closeAppAlert.bind(this);
    this.closeAppAtoD = this.closeAppAtoD.bind(this);
    this.closeAppBMI = this.closeAppBMI.bind(this);
    this.closeAppTime = this.closeAppTime.bind(this);
    this.closeAppNumber = this.closeAppNumber.bind(this);
    this.closeAppMirror = this.closeAppMirror.bind(this);
    this.closeAppExpense = this.closeAppExpense.bind(this);
    this.closeAppPrime = this.closeAppPrime.bind(this);
    this.closeAppCounter = this.closeAppPrime.bind(this);
    this.state = {
      search: "",
      disp: "block",
      allow: "none",
      disp1: "block",
      allow1: "none",
      disp2: "block",
      allow2: "none",
      disp3: "block",
      allow3: "none",
      disp4: "block",
      allow4: "none",
      disp5: "block",
      allow5: "none",
      disp6: "block",
      allow6: "none",
      disp7: "block",
      allow7: "none",
      disp8: "block",
      allow8: "none",
    };
  }
  keyboardEntry(event) {
    if (event.key === "Enter") {
      this.finding();
    }
  }
  searchCheck(event) {
    this.setState({
      search: event.target.value,
    });
  }
  finding() {
    if (
      this.state.search === "bmi calculator" ||
      this.state.search === "bmi" ||
      this.state.search === "BMI"
    ) {
      this.setState({
        disp: "block",
        disp1: "none",
        disp2: "none",
        disp3: "none",
        disp4: "none",
        disp5: "none",
      });
    }
    if (
      this.state.search === "age to days" ||
      this.state.search === "Age to Days" ||
      this.state.search === "Age to day"
    ) {
      this.setState({
        disp: "none",
        disp1: "block",
        disp2: "none",
        disp3: "none",
        disp4: "none",
        disp5: "none",
      });
    }
    if (
      this.state.search === "alert timer" ||
      this.state.search === "timer" ||
      this.state.search === "alarm"
    ) {
      this.setState({
        disp: "none",
        disp1: "none",
        disp2: "block",
        disp3: "none",
        disp4: "none",
        disp5: "none",
      });
    }
    if (this.state.search === "clock" || this.state.search === "live clock") {
      this.setState({
        disp: "none",
        disp1: "none",
        disp2: "none",
        disp3: "block",
        disp4: "none",
        disp5: "none",
      });
    }
    if (
      this.state.search === "odd or even" ||
      this.state.search === "ODD OR EVEN" ||
      this.state.search === "even or odd"
    ) {
      this.setState({
        disp: "none",
        disp1: "none",
        disp2: "none",
        disp3: "none",
        disp4: "block",
        disp5: "none",
      });
    }
    if (this.state.search === "Mirror" || this.state.search === "mirror") {
      this.setState({
        disp: "none",
        disp1: "none",
        disp2: "none",
        disp3: "none",
        disp4: "none",
        disp5: "block",
      });
    }
  }
  changeColor() {
    this.setState({ disp: "none" });
    this.setState({ allow: "block" });
  }
  changeAge() {
    this.setState({ disp1: "none" });
    this.setState({ allow1: "block" });
  }
  changeAlert() {
    this.setState({ disp2: "none" });
    this.setState({ allow2: "block" });
  }
  changeTime() {
    this.setState({ disp3: "none" });
    this.setState({ allow3: "block" });
  }
  changeNumber() {
    this.setState({ disp4: "none" });
    this.setState({ allow4: "block" });
  }
  changemirror() {
    this.setState({ disp5: "none" });
    this.setState({ allow5: "block" });
  }
  changeExpense() {
    this.setState({ disp6: "none" });
    this.setState({ allow6: "block" });
  }
  changePrime() {
    this.setState({ disp7: "none" });
    this.setState({ allow7: "block" });
  }
  changeCounter(){
    this.setState({ disp8: "none" });
    this.setState({ allow8: "block" });
  }
  closeAppBMI() {
    this.setState({ allow: "none" });
    this.setState({ disp: "block" });
  }
  closeAppAtoD() {
    this.setState({ allow1: "none" });
    this.setState({ disp1: "block" });
  }
  closeAppAlert() {
    this.setState({ allow2: "none" });
    this.setState({ disp2: "block" });
  }
  closeAppTime() {
    this.setState({ allow3: "none" });
    this.setState({ disp3: "block" });
  }
  closeAppNumber() {
    this.setState({ allow4: "none" });
    this.setState({ disp4: "block" });
  }
  closeAppMirror() {
    this.setState({ allow5: "none" });
    this.setState({ disp5: "block" });
  }
  closeAppExpense() {
    this.setState({ allow6: "none" });
    this.setState({ disp6: "block" });
  }
  closeAppPrime() {
    this.setState({ allow7: "none" });
    this.setState({ disp7: "block" });
  }
  closeAppCounter(){
    this.setState({ allow8: "none" });
    this.setState({ disp8: "block" });
  }
  render() {
    return (
      <div>
        <div className="searchbar" style={{ display: "inline-block" }}>
          <input
            type="text"
            onChange={this.searchCheck}
            onKeyPress={this.keyboardEntry}
          />
        </div>
        <div
          className="searchicon"
          style={{ display: "inline-block", cursor: "pointer" }}
          onClick={this.finding}
        >
          <Search />
        </div>
        <div></div>
        <div style={{ float: "right", marginTop: "18px", marginRight: "31px" }}>
          <button
            onClick={this.changeExpense}
            style={{
              display: this.state.disp6,
              backgroundColor: "rgb(79,38,131)",
              color: "white",
            }}
          >
            Monthly Expense
          </button>
          <button
            onClick={this.changeCounter}
            style={{
              display: this.state.disp8,
              backgroundColor: "rgb(19,20,50)",
              marginTop: "30px",
              color: "white",
            }}
          >
            Click Counter
          </button>
          <button
            onClick={this.changePrime}
            style={{
              display: this.state.disp7,
              marginTop: "30px",
              backgroundColor: "rgb(66, 245, 78)",
            }}
          >
            Prime or Not
          </button>
        </div>
        <div
          className="expense formrender"
          style={{ display: this.state.allow6 }}
        >
          <h2 className="heading">Monthly Expense</h2>
          <MonthlyExpense />
          <button
            className="closebtn"
            onClick={this.closeAppExpense}
            style={{ backgroundColor: "rgb(79,38,131)", color: "white" }}
          >
            Close
          </button>
        </div>
        <div
          className="primenumber formrender"
          style={{ display: this.state.allow7 }}
        >
          <h2 className="heading">Check the Number is Prime or Not</h2>
          <PrimeorNot />
          <button
            className="closebtn"
            onClick={this.closeAppPrime}
            style={{ backgroundColor: "rgb(66, 245, 78)" }}
          >
            Close
          </button>
        </div>
        <div
          className="clickcounter formrender"
          style={{ display: this.state.allow8 }}
        >
          <h2 className="heading">Click Counter</h2>
          <Counter />
          <button
            className="closebtn"
            onClick={this.closeAppCounter}
            style={{ backgroundColor: "rgb(19,20,50)",color:'white' }}
          >
            Close
          </button>
        </div>
        <button
          className="mainbtn"
          onClick={this.changeColor}
          style={{
            display: this.state.disp,
            backgroundColor: "rgb(255,194,0)",
          }}
        >
          BMI Calculator
        </button>
        <div
          className="bmiForm formrender"
          style={{ display: this.state.allow }}
        >
          <h2 className="heading">BMI Calculator</h2>
          <BmiForm />
          <button
            className="closebtn"
            onClick={this.closeAppBMI}
            style={{ backgroundColor: "rgb(255,194,0)" }}
          >
            Close
          </button>
        </div>
        <button
          className="mainbtn"
          onClick={this.changeAge}
          style={{ display: this.state.disp1, backgroundColor: "yellowgreen" }}
        >
          Ages to Days
        </button>
        <div
          className="agetoday formrender"
          style={{ display: this.state.allow1 }}
        >
          <h2 className="heading">Age to day converter</h2>
          <Agetoday />
          <button
            className="closebtn"
            onClick={this.closeAppAtoD}
            style={{ backgroundColor: "yellowgreen" }}
          >
            Close
          </button>
        </div>
        <button
          className="mainbtn"
          onClick={this.changeNumber}
          style={{
            display: this.state.disp4,
            backgroundColor: "rgb(25,170,109)",
          }}
        >
          Odd or Even
        </button>
        <div
          className="oddoreven formrender"
          style={{ display: this.state.allow4 }}
        >
          <h2 className="heading">Odd or Even</h2>
          <EvenorOdd />
          <button
            className="closebtn"
            onClick={this.closeAppNumber}
            style={{ backgroundColor: "rgb(25,170,109)" }}
          >
            Close
          </button>
        </div>
        <button
          className="mainbtn"
          onClick={this.changeAlert}
          style={{ display: this.state.disp2, backgroundColor: "steelblue" }}
        >
          Alert Timer
        </button>
        <div
          className="notification formrender"
          style={{ display: this.state.allow2 }}
        >
          <h2 className="heading">Alert Timer</h2>
          <Notification />
          <button
            className="closebtn"
            onClick={this.closeAppAlert}
            style={{ backgroundColor: "steelblue" }}
          >
            Close
          </button>
        </div>
        <button
          className="mainbtn"
          onClick={this.changeTime}
          style={{
            display: this.state.disp3,
            backgroundColor: "rgb(235, 64, 52)",
          }}
        >
          Live Clock
        </button>
        <div
          className="liveclock formrender"
          style={{ display: this.state.allow3 }}
        >
          <h2 className="heading">Live clock</h2>
          <Liveclock />
          <button
            className="closebtn"
            onClick={this.closeAppTime}
            style={{ backgroundColor: "rgb(235, 64, 52)" }}
          >
            Close
          </button>
        </div>
        <button
          className="mainbtn"
          onClick={this.changemirror}
          style={{ display: this.state.disp5, backgroundColor: "silver" }}
        >
          Mirror
        </button>
        <div
          className="mirror formrender"
          style={{ display: this.state.allow5 }}
        >
          <h2 className="heading">Webcam Mirror</h2>
          <Mirror />
          <button
            className="closebtn"
            onClick={this.closeAppMirror}
            style={{ backgroundColor: "silver" }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default Button;
