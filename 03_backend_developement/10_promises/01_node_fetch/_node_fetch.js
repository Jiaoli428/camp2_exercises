const fetch = require("node-fetch");
fetch(
  `https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b`,
  {method: "GET"}
)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    return product.title;
  })
  // .then((productTitle) => {
  //   console.log(productTitle);
  //   return "le super produit " + productTitle;
  // })
  // .then((unLibelle) => {
  //   console.log(unLibelle);
  // })
  .catch((error) => {
    console.warn(error);
  })
