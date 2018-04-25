const PG = require("pg");

function getProduct (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products WHERE id = $1::uuid",
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
module.exports = getProduct;
