import React from "react";
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

function checkWeather(weather) {
  if (weather < 300) {
    return <img src={storm} alt="stormy" />;
  } else if (weather >= 300 && weather <= 499) {
    return <img src={partlycloudy} alt="partlyclouds" />;
  } else if (weather >= 500 && weather <= 599) {
    return <img src={rain} alt="rainy" />;
  } else if (weather >= 600 && weather <= 699) {
    return <img src={snow} alt="snowy" />;
  } else if (weather >= 700 && weather <= 799) {
    return <img src={fog} alt="foggy" />;
  } else if (weather === 800) {
    return <img src={clear} alt="cleared" />;
  } else if (weather === 801) {
    return <img src={partlycloudy} alt="partcloud" />;
  } else if (weather > 801 && weather <= 805) {
    return <img src={mostlycloudy} alt="mostcloud" />;
  }
  {
  }
}

export default function futureWeather(props) {
  return (
    <>
      <div id="body">
        <div className="Temperatures">
          <div>{props.list.dt_txt.substring(11, 16)}</div>
          <div id="img1">{checkWeather(props.list.weather[0].id)}</div>
          <div>{Math.floor(props.list.main.temp - 273.15)} °C</div>
        </div>
      </div>
    </>
  );
}
