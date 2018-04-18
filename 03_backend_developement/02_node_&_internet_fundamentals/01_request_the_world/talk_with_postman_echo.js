const request = require("request");

function simpleGet (callback) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}


function simpleGetWithParams(callback) {
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people[]=Frieda&people[]=Francis",
      method: "GET"
    },
    function(error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}


function validateTimestamp(callback) {
  let currentDate = new Date(2014,1,1);
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${currentDate}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
/*
{"args":{
  "foo":"bar",
  "program":"camp2",
  "people":["Frieda","Francis"]
},
"headers":{"host":"postman-echo.com","x-forwarded-port":"443","x-forwarded-proto":"https"},
"url":"https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis"}
*/
