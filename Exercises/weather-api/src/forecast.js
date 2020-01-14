import React from "react";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

export default function Forecast() {
  return (
    <>
      <div className="Head">
        <img src={partlycloudy} id="img1"></img>
        <figcaption>overcast Clouds</figcaption>
      </div>
      <div className-="temphum">
        <div className="temp">
          <pre>
            <b>Temperature</b> 10° to 11°
          </pre>
        </div>
        <br />
        <div className="hum">
          <pre>
            <b>Humidity</b> 78% <b>Pressure</b> 1008.48
          </pre>
        </div>
      </div>
    </>
  );
}
