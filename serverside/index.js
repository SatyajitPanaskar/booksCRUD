import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";
const URL =
  "mongodb+srv://new-books:newbooks@books0.cc7obff.mongodb.net/book-store?retryWrites=true&w=majority&appName=Books0";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = 3001;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`server is running at ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
