const convertToCelsius = function(temp) {
    var temperatureInCelsius = ((temp-32)*(5/9));
    temperatureInCelsius =  Math.round(temperatureInCelsius * 10) / 10;
  return temperatureInCelsius;
};

const convertToFahrenheit = function(temp) {
  var temperatureInFahrenheit = ((temp*(9/5))+32);
  temperatureInFahrenheit = Math.round(temperatureInFahrenheit *10) / 10;
  return temperatureInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
