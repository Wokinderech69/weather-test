import React from "react";

const WeatherImput = (props) => {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const submitButton = document.querySelector('button[type="submit"]');

    if (inputValue.trim() === "") {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  };
  return (
    <div>
      <form onSubmit={props.methodWeather}>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          onChange={handleInput}
        />
        <button type="submit" disabled={true}>
          Send
        </button>
      </form>
    </div>
  );
};
export default WeatherImput;
