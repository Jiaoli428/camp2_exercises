const PG = require("pg");

function getCategories () {
  const client = new PG.Client();
  client.connect();
  return client.query(
    "SELECT * FROM categories")
    .then(function(response){
      return response.rows;
    });
    // ,
    // [],
    // function(error, result2) {
    //   client.end();
    //   if (error) {
    //     send.warn(error);
    //   } else {
    //     result.json(result2.rows)
    //   }
    // }
  // );
}
module.exports = getCategories;
