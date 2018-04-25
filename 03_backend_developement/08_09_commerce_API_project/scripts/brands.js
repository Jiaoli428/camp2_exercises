const request = require("request");
const PG = require("pg");

function brands () {
  request(
    { url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET",
    },
    function(error, response, result) {
      const array = JSON.parse(result);
      let counter = 0;
      const client = new PG.Client();
      client.connect();
      const brands = array.forEach(function (row) {
        client.query(
          "INSERT INTO brands (id, title) VALUES ($1::uuid,$2::varchar);",
          [row.id, row.title],
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
brands();

// const request = require("request");
// const PG = require("pg");
//
// const client = new PG.Client();
// client.connect();
//
// function getBrands() {
//   request({
//     url: "https://decath-product-api.herokuapp.com/brands"
//   }, function(error, response, body) {
//     if (error) {
//       console.warn(error);
//       return;
//     }
//     const brands = JSON.parse(body);
//
//     insertBrand(brands, 0);
//   });
// }
//
//
// function insertBrand(brands, index) {
//   client.query(
//     "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::varchar);",
//     [brands[index].id, brands[index].title],
//     function(error, result) {
//       if (error) {
//         console.warn(error);
//         return;
//       }
//       if (brands[index + 1]) {
//         insertBrand(brands, index + 1);
//       } else {
//         client.end();
//       }
//     }
//   );
// }
//
// getBrands();
