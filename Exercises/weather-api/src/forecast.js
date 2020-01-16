import React from "react";
export default function Forecast(props) {
  return (
    <>
      <div className="Head">
        <img src={props.image} id="img2" alt="" />
        <figcaption>{props.weath}</figcaption>
      </div>
      <div className-="temphum">
        <div className="temp">
          <pre>
            <b>Temperature</b> {Math.round(props.tempMin)} °C to{" "}
            {Math.round(props.tempMax)} °C
          </pre>
        </div>
        <br />
        <div className="hum">
          <pre>
            <b>Humidity</b> {props.humi} % <b>Pressure</b> {props.press}
          </pre>
        </div>
      </div>
    </>
  );
}
