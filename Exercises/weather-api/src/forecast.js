import React from "react";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

export default function Forecast(props) {
  return (
    <>
      <div className="Head">
        <img src={partlycloudy} id="img2"></img>
        <figcaption>overcast Clouds</figcaption>
      </div>
      <div className-="temphum">
        <div className="temp">
          <pre>
            <b>Temperature</b> {props.temp}
          </pre>
        </div>
        <br />
        <div className="hum">
          <pre>
            <b>Humidity</b> {props.humi} <b>Pressure</b> {props.press}
          </pre>
        </div>
      </div>
    </>
  );
}
