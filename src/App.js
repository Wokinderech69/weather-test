import React from "react";

import WeatherImput from "./componets/weatheer/WeatherInput/WeatherInput";
import WeatherOutput from "./componets/weatheer/WeatherOutput/WeatherOutput";

const API_OPENWEATHER_KEY = "43b06ff59c85097d4f2d208e97b1f0f6";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined,
  };
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_OPENWEATHER_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      if (data && data.main && data.main.temp) {
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          error: undefined,
        });
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          error: "Сity is not entered",
        });
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        error: " not ",
      });
    }
  };
  // getWeather = async (event) => {
  //   event.preventDefault();
  //   const city = event.target.elements.city.value;

  //   if (city) {
  //     const api_url = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_OPENWEATHER_KEY}&units=metric`
  //     );
  //     const data = await api_url.json();
  //     console.log(data);
  //     this.setState({
  //       temp: data.main.temp,
  //       city: data.name,
  //       country: data.sys.country,
  //       error: undefined,
  //     });
  //   } else {
  //     this.setState({
  //       temp: undefined,
  //       city: undefined,
  //       country: undefined,
  //       error: "Сity is not entered",
  //     });
  //   }
  // };
  render() {
    return (
      <div className="container">
        <h1>React weather test</h1>
        <WeatherImput methodWeather={this.getWeather} />
        <WeatherOutput
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
