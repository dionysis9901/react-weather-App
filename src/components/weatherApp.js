import React from "react";

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      timezone: null,
      summary: null,
      temperature: null
    };
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
            const { timezone } = data;
            const { summary, temperature } = data.currently;
            this.setState({
              timezone: timezone,
              summary: summary,
              temperature: temperature
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
    return (
      <div>
        <p className="country">{this.state.timezone}</p>
        <p className="celicius">{this.state.temperature}</p>
        <p className="description">{this.state.summary}</p>
      </div>
    );
  }
}
