const request = require("request");

function weatherByLatitudeAndLongitude(lat, lon) {
    request(
      { url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=633393cff6cd933139e53290338981fb`,
        method: "GET",
      },
      function(error, response, result) {
          const weather = JSON.parse(result);
          console.log(`${weather.main.temp}°C`);
      }
  );
  };
weatherByLatitudeAndLongitude(35, 139);


function weatherByZipcode(zipCode, countryCode) {
    request(
      { url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=metric&APPID=633393cff6cd933139e53290338981fb`,
        method: "GET",
      },
      function(error, response, result) {
          const weather = JSON.parse(result);
          console.log(`${weather.main.temp}°C`);
      }
  );
  };
weatherByZipcode(59000, "fr");


module.exports = {
  weatherByLatitudeAndLongitude,
  weatherByZipcode
};
