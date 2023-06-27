import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/dbConn.js";
import collegeRoute from "./routes/collegeRoute.js";
import studentRoute from "./routes/studentRoute.js";
import sendStatuswithData from "./utils/sendStatuswithData.js";

const app = express();
const port = process.env.PORT || 8080;

//Connect to MongoDB
connectDB();

app.use(express.json());

// handle cors (not for production)
app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//middleware for cookies
app.use(cookieParser());

// middleware to compress data
app.use(compression());

app.use("/college", collegeRoute);
app.use("/student", studentRoute);

app.all("*", (req, res) => {
  sendStatuswithData.notFound(res, "Api not found");
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
