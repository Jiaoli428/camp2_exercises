const PG = require("pg");

function getBrands(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands",
    [],
    function(error, dbResult) {
      client.end();
      if (error) {
        result.send(error);
      } else {
        result.json(dbResult.rows);
      }
    }
  );
}
module.exports = getBrands;
