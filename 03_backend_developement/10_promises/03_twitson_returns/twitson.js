const fetch = require("node-fetch");
const OAuth = require("oauth");

function twitson(twitterUsername) {
  return fetch ("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+twitterUsername;
    {method: "GET",
    body: JSON.stringify({
    process.env.TWITTER_REQUEST_URL,
    process.env.TWITTER_ACCESS_URL,
    process.env.TWITTER_KEY,
    process.env.TWITTER_SECRET
    })
  });
}
  .then((response) => response.json())
  .then((getPost) => {
    return `getPost`;
  })
  .catch((error) => {
    console.warn(error);
  });

//
//   oauth.get(
//     url + twitterUsername,
//
//     function (error, data) {
//       const tweets = JSON.parse(data);
//       function getText(element) {
//         return element.text;
//       }
//       const texts = tweets.map(getText).join("\n\n");
//       const username = process.env.WATSON_USERNAME;
//       const password = process.env.WATSON_KEY;
//       const url = process.env.WATSON_URL;
//       const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
//       const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + texts);
//
//       request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
//         console.log(body);
//       });
//     }
//   );
// }

twitson("neiltyson");
