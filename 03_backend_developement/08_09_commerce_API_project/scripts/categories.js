const request = require("request");
const PG = require("pg");

function categories () {
  request(
    { url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET",
    },
    function(error, response, result) {
      const array = JSON.parse(result);
      let counter = 0;
      const client = new PG.Client();
      client.connect();
      const categories = array.forEach (function (row) {
        client.query(
          "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid,$2::int4,$3::varchar);",
          [row.id, row.decathlon_id, row.label],
          function(error, result) {
            if (error) {
              console.warn(error);
              return;
            }
            else {counter++;
              if (counter >= array.length) {
              client.end();
            }
              console.log(result,row);
            }
          }
        );
      });
    }
  );
}
categories();
