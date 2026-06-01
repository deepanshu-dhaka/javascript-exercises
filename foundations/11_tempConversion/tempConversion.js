const convertToCelsius = function (temp) {
  let decimalReuslt = (temp - 32) / 1.8;
  let roundedResult = Math.round(decimalReuslt * 10) / 10;
  return roundedResult;
};

const convertToFahrenheit = function (temp) {
  let decimalReuslt = (temp * 1.8) + 32;
  let roundedResult = Math.round(decimalReuslt * 10) / 10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
