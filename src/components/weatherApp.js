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
    this.toCelsius = this.toCelsius.bind(this);
  }
  componentDidMount() {
    document.tittle = "SkyChecker";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude
        });

        const proxy = "https://cors-anywhere.herokuapp.com/api.darksky.net/"; // this can be deleted when official launch
        const api = `${proxy}https://api.darksky.net/forecast/9cf4efbb3abf34df3415d1db93aad9d6/${this.state.lat},${this.state.long}`;
        // Use proxy if you want to Run it Locally ;)

        // const api = `https://api.darksky.net/forecast/9cf4efbb3abf34df3415d1db93aad9d6/${this.state.lat},${this.state.long}`;
        fetch(api)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            const { timezone } = data;
            const { summary, temperature, icon } = data.currently;
            const iconModded = icon.replace(/-/g, "_").toUpperCase();
            const temperatureCel = Math.floor(this.toCelsius(temperature));
            this.setState({
              timezone: timezone,
              summary: summary,
              temperature: temperatureCel,
              icon: iconModded
            });
          });
      });
    }
  }

  toCelsius(f) {
    return (5 / 9) * (f - 32);
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
      <div className="info">
        <p className="info__country"> {this.state.timezone}</p>
        <p className="info__celicius">{this.state.temperature} °C</p>
        <div className="info__icon">
          {" "}
          <Skycons
            height="200"
            width="200"
            color="black"
            icon={this.state.icon}
          />
        </div>

        <p className="info__description">{this.state.summary}</p>
      </div>
    );
  }
}
