import React, { Component } from "react";
import "./Formstyle.css";

export class Notification extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alramTime: "",
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }
  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if (this.state.currentTime === this.state.alarmTime) {
        alert("its time!");
      } else {
        console.log("not yet");
      }
    }
  }

  render() {
    return (
      <div>
        <div className="formDetails">
          <h4 className="clk">{this.state.currentTime}</h4>
          <h3>{this.alarmMessage}</h3>
          <input type="time" onChange={this.setAlarmTime} />
        </div>
      </div>
    );
  }
}

export default Notification;
