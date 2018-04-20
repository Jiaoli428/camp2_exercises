const request = require("request");

function weatherByCity(cityName) {
    request(
      { url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=633393cff6cd933139e53290338981fb`,
        method: "GET",
      },
      function(error, response, result) {
        const weather = JSON.parse(result);
        console.log(`${weather.main.temp}°C`);
      }
  );
}

weatherByCity("Shanghai");

module.exports = weatherByCity;
