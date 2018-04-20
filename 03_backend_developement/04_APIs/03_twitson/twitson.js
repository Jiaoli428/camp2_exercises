const request = require("request");
const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url2 = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

oauth.get(url + "aryko", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET,
  function (error, data) {
    if (error) {
      console.log(error);
    }
    else {
      const text = JSON.parse(data).map(function(tweet) {
        return tweet.text;
      });
      console.log(text);
      const uri = encodeURI(url2 + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
      request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
        console.log(body);
      });
    }
});
