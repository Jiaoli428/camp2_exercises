const PG = require("pg");

function getCategory (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories WHERE id = $1::uuid",
    [request.params.id],
    function(error, result2) {
      client.end();
      if (error) {
        send.warn(error);
      } else {
        result.json(result2.rows[0])
      }
    }
  );
}

module.exports = getCategory;
