import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
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
app.use(express.json());
app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

/* Error Handler Middleware : Should be at very last*/
app.use(resourceNotFound);
app.use(customErrorHandler);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`)
);
