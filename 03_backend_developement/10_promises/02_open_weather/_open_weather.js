const fetch = require("node-fetch");

function weatherByCity(cityName) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=633393cff6cd933139e53290338981fb`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((weather) => {
      return `${weather.main.temp}°C`;
    })
    .catch((error) => {
      console.warn(error);
    });
}
weatherByCity("Shanghai")
  .then((cityWeather) => {
    console.log(cityWeather);
  });


function weatherByLatitudeAndLongitude(lat, lon) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=633393cff6cd933139e53290338981fb`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((weather) => {
      return `${weather.main.temp}°C`;
    })
    .catch((error) => {
      console.warn(error);
    });
}
weatherByLatitudeAndLongitude(32.661343, 51.680374)
.then((weatherByLatByLon) => {
  console.log(weatherByLatByLon);
});
