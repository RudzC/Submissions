import React from "react";
export default function futureWeather(props) {
  return (
    <>
      <div id="body">
        <div className="Temperatures">
          <div>{props.list.dt_txt.substring(11, 16)}</div>
          <div id="img1">
            <img src={props.image} />
          </div>
          <div>{Math.floor(props.list.main.temp)} °C</div>
        </div>
      </div>
    </>
  );
}
