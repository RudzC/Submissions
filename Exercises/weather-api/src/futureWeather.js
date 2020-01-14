import React from "react";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

export default function futureWeather() {
  return (
    <>
      <div id="body">
        <div className="Temperatures">
          <div>
            <div>03:00</div>
            <div>
              <img id="imgT" src={partlycloudy}></img>
            </div>
            <div>8°C.</div>
          </div>
          <div>
            <div>06:00</div>
            <div>
              <img id="imgT" src={partlycloudy}></img>
            </div>
            <div>9°C.</div>
          </div>
          <div>
            <div>09:00</div>
            <div>
              <img id="imgT" src={clear}></img>
            </div>
            <div>14°C.</div>
          </div>
          <div>
            <div>12:00</div>
            <div>
              <img id="imgT" src={clear}></img>
            </div>
            <div>17°C.</div>
          </div>
          <div>
            <div>15:00</div>
            <div>
              <img id="imgT" src={clear}></img>
            </div>
            <div>18°C.</div>
          </div>
          <div>
            <div>18:00</div>
            <div>
              <img id="imgT" src={clear}></img>
            </div>
            <div>16°C.</div>
          </div>
          <div>
            <div>21:00</div>
            <div>
              <img id="imgT" src={partlycloudy}></img>
            </div>
            <div>13°C.</div>
          </div>
        </div>
      </div>
    </>
  );
}
