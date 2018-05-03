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
      const html = `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

          <title>Weather Shanghai</title>
        </head>

        <body>
        <nav class="nav nav-tabs nav-fills justify-content-between align-items-center navbar-light bg-secondary">
          <div class="text-center text-white mt-3">
          <h3>Weather Shanghai</h3>
          </div>

        <div class="text-white h4">${weather.main.temp}°C</div>
        <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" width="88" height="88">

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
        </body>
      </html>`;
      result.send(html);
    })
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
 console.log("Server listening on port:" + port);
});
