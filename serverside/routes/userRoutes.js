import express from "express";
import {
  create,
  deleteBook,
  getAllBooks,
  getOneBook,
  updateBook,
} from "./../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllBooks", getAllBooks);
route.get("/getOnebook/:id", getOneBook);
route.put("/updateBook/:id", updateBook);
route.delete("/deleteBook/:id", deleteBook);

export default route;
