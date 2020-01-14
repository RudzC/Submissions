import React, { Component } from "react";
import "./App.css";

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
            <form>
              <input type="text" id="city" placeholder="City"></input>
              <input
                type="button"
                name="submit"
                value="Find Weather"
                id="find"
              ></input>
            </form>
          </div>
        </header>
        <main className="app__main">
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
        </main>
      </div>
    );
  }
}

export default App;
