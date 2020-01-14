import React, { Component } from "react";
import "./App.css";
import Search from "./search.js";
import Forecast from "./forecast";
import FutureWeather from "./futureWeather.js";
import NewFakeWeather from "./fakeWeather.json";

import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unkown from "./img/weather-icons/unknown.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="inputHere">
            <Search />
          </div>
        </header>
        <main className="app__main">
          <Forecast />
          <FutureWeather />
        </main>
      </div>
    );
  }
}

export default App;
