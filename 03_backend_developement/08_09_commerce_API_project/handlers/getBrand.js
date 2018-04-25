const PG = require("pg");

function getBrand(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid",
    [request.params.id],
    function(error, result2) {
      client.end();
      if (error) {
        result.send(error);
      } else {
        result.json(result2.rows[0]);
      }
    }
  );
}
module.exports = getBrand;

// get brands;
// construct an array with all entries to insert;
// loop on it with inserts.
