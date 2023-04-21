import React from "react";

const WeatherImput = (props) => (
  <div>
    <form onSubmit={props.methodWeather}>
      <input type="text" name="city" placeholder="city" />
      <button>Send</button>
    </form>
  </div>
);
export default WeatherImput;
