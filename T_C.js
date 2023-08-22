// javascript
function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputElement = document.getElementById("output");
  if (inputUnit === "celsius") {
    const convertTemp = (inputTemp * 9) / 5 + 32;
    outputElement.textContent = `${inputTemp} °C is ${convertTemp.toFixed(
      2
    )}°F`;
  } else if (inputUnit === "fahrenheit") {
    const convertTemp = ((inputTemp - 32) * 5) / 9;
    outputElement.textContent = `${inputTemp} °F is ${convertTemp.toFixed(
      2
    )}°C`;
  } else {
    outputElement.textContent = "invalid input";
  }
}
