const expres = require("express");
const products = require("./data/products");
const app = expres();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  product
    ? res.status(200).json(product)
    : res.json({ message: "Product not found" });
});

app.listen(8000, console.log("Server running at port 8000"));
