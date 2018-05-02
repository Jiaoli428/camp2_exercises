const fetch = require("node-fetch");
const express = require("express");
const app = express();
// const path = require ("path");


function weatherByCity(cityName) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=633393cff6cd933139e53290338981fb`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((weather) => {
      return weather;
    })
    .catch((error) => {
      console.warn(error);
    });
}

app.get("/", function(request, result) {
  // result.sendFile(path.join(__dirname + "/index.html"));
  weatherByCity("Shanghai")
    .then(weather => {
      const html =
        `<div class="text-white h4">${weather.main.temp}°C</div>
        <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" width="88" height="88">`;
      result.send(html);
    })
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
 console.log("Server listening on port:" + port);
});
