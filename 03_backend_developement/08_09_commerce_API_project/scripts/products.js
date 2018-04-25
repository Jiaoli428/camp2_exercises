const request = require("request");
const PG = require("pg");

function products () {
  request(
    { url: "https://decath-product-api.herokuapp.com/products",
      method: "GET",
    },
    function(error, response, result) {
      const array = JSON.parse(result);
      let counter = 0;
      const client = new PG.Client();
      client.connect();
      const products = array.forEach (function (row) {
        client.query(
          "INSERT INTO products (id, decathlon_id, title, description, brand_id,"
          +"min_price, max_price, crossed_price, percent_reduction, image_path,"
          +"rating) VALUES ($1::uuid,$2::int4,$3::varchar,$4::varchar, $5::uuid,"
          +"$6::float4, $7::float4, $8::float4, $9::float4, $10::varchar, $11::float4)",
          [row.id, row.decathlon_id, row.title, row.description, row.brand_id,
          row.min_price, row.max_price, row.crossed_price, row.percent_reduction,
          row.image_path, row.rating],
          function(error, result) {
            if (error) {
              console.warn(error);
            } else {
              counter++;
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
products();
