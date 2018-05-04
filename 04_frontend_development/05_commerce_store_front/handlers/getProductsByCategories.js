const PG = require("pg");

function getProductsByCategories () {
  const client = new PG.Client();
  client.connect();
  return client.query(
    "SELECT * FROM productsbycategories")
    .then(function(response){
      return response.rows;
    });
    // [],
//     function(error, result2) {
//       client.end();
//       if (error) {
//         result.send(error);
//       } else {
//         result.json(result2.rows);
//       }
//     }
//   );
}
module.exports = getProductsByCategories;
