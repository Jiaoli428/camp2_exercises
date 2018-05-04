const express = require("express");
const getProduct = require("./handlers/getProduct");
const getProducts = require("./handlers/getProducts");
const getCategory = require("./handlers/getCategory");
const getCategories = require("./handlers/getCategories");
const getProductsByCategories = require("./handlers/getProductsByCategories");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure("webpages", {
  autoescape: true,
  express: app
});
app.set("webpages", __dirname + "/webpages");
app.set("view engine", "njk");
// app.get("/products/:id", getProduct);
// app.get("/products", getProducts);
// app.get("/categories/:id", getCategory);
// app.get("/categories", getCategories);


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server listening on port:" + port);
});

app.get("/",function(request,result){
  result.render("layout", {title: "Decathlon Catalog"});
})

app.get("/categories",function(request,result){
  getCategories()
  .then(categories => {
  result.render("layoutCategories", {boards: categories});
})
})

app.get("/categories/:categorieid",function(request,result){
  getProductsByCategories()
  .then(categories => {
  result.render("layoutCategories", {boards: categories});
})
})

app.get("/products",function(request,result){
  getProducts()
  .then(products => {
  result.render("layoutProducts", {boards: products});
})
})
