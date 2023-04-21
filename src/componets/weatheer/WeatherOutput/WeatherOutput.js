import React from "react";

const WeatherOutput = (props) => (
  <div>
    {props.city && (
      <div>
        <p>City: {props.city}</p>
        <p>Country: {props.country}</p>
        <p>Temp: {props.temp}</p>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);
export default WeatherOutput;
