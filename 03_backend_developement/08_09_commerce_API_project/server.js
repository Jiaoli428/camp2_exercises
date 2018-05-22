const express = require("express");
const getBrand = require("./handlers/getBrand");
const getBrands = require("./handlers/getBrands");
const getProduct = require("./handlers/getProduct");
const getProducts = require("./handlers/getProducts");
const getCategory = require("./handlers/getCategory");
const getCategories = require("./handlers/getCategories");
const getCategories = require("./handlers/getCategories");
const getProductsCategories = require(".categories ");
const app = express();


app.get("/brands/:id", getBrand);
app.get("/brands", getBrands);
app.get("/products/:id", getProduct);
app.get("/products", getProducts);
app.get("/categories/:id", getCategory);
app.get("/categories", getCategories);


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server listening on port:" + port);
});
