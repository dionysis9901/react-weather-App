// var Skycons = require("react-skycons");
import React from "react";

import Skycons from "react-skycons";

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      timezone: null,
      summary: null,
      temperature: null,
      icon: null
    };
    this.ref = React.createRef();
    // this.setIcon = this.setIcon.bind(this);
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude
        });
        const proxy = "https://cors-anywhere.herokuapp.com/"; // this can be deleted when official launch
        const api = `${proxy}https://api.darksky.net/forecast/9cf4efbb3abf34df3415d1db93aad9d6/${this.state.lat},${this.state.long}`;
        fetch(api)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            const { timezone } = data;
            const { summary, temperature, icon } = data.currently;
            const iconModded = icon.replace(/-/g, "_").toUpperCase();

            this.setState({
              timezone: timezone,
              summary: summary,
              temperature: temperature,
              icon: iconModded
            });
          });
      });
    } else {
      alert(
        "You need to give Access To Your Location in Order to Track you and give you info about the weather"
      );
    }
  }
  render() {
    if (
      this.state.timzone === null ||
      this.state.summary === null ||
      this.state.temperature === null
    ) {
      return (
        <div>
          <p className="loadingScreen">Loading ...</p>
        </div>
      );
    }
    return (
      <div>
        <p className="country">{this.state.timezone}</p>
        <p className="celicius">{this.state.temperature}</p>
        <div className="icon">
          {" "}
          <Skycons
            height="200"
            width="200"
            color="black"
            icon={this.state.icon}
          />
        </div>

        <p className="description">{this.state.summary}</p>
      </div>
    );
  }
}
