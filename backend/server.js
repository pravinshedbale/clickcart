import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import {
  customErrorHandler,
  resourceNotFound,
} from "./middlewares/customErrorHandler.js";

// Environment Configuration
dotenv.config();

// Connect to DB
connectDB();

// Server Initialization
const app = express();

/* Routes and Middlewares */
app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/products", productRoutes);

/* Error Handler Middleware : Should be at very last*/
app.use(resourceNotFound);
app.use(customErrorHandler);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`)
);
