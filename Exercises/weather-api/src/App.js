import React, { Component } from "react";
import "./App.css";
import Search from "./search.js";
import Forecast from "./forecast";
import FutureWeather from "./futureWeather.js";
//import NewFakeWeather from "./fakeWeather.json";
import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
      isLoaded: false,
      input: "Beirut"
    };
  }
  getCity = city => {
    this.setState({ input: city });
    this.getApiData(city);
  };

  getApiData = something => {
    const apiKey = "0ac6ea480fc290630d2bb52b724016e2";
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${something}&cnt=8&units=metric&appid=${apiKey}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          apiData: data,
          isLoaded: true
        })
      )
      .catch(error => alert("error"));
  };
  checkWeather(weather) {
    if (weather < 300) {
      return storm;
    } else if (weather >= 300 && weather <= 499) {
      return partlycloudy;
    } else if (weather >= 500 && weather <= 599) {
      return rain;
    } else if (weather >= 600 && weather <= 699) {
      return snow;
    } else if (weather >= 700 && weather <= 799) {
      return fog;
    } else if (weather === 800) {
      return clear;
    } else if (weather === 801) {
      return partlycloudy;
    } else if (weather > 801 && weather <= 805) {
      return mostlycloudy;
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="inputHere">
            <Search getCity={this.getCity} />
          </div>
        </header>
        {this.state.isLoaded && (
          <main className="app__main">
            <Forecast
              tempMin={this.state.apiData.list[0].main.temp_min}
              tempMax={this.state.apiData.list[0].main.temp_max}
              press={this.state.apiData.list[0].main.pressure}
              humi={this.state.apiData.list[0].main.humidity}
              image={this.checkWeather(
                this.state.apiData.list[0].weather[0].id
              )}
              weath={this.state.apiData.list[0].weather[0].main}
            />
            <div id="test">
              {this.state.apiData.list.slice(1, 8).map((item, value) => {
                return (
                  <FutureWeather
                    key={value}
                    list={item}
                    image={this.checkWeather(item.weather[0].id)}
                  />
                );
              })}
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default App;
