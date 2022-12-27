import React from "react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

const TemperatureInput = (props) => {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력하세요.{scaleNames[props.scale]}</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
