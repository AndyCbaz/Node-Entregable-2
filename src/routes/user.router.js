const express = require("express");
const { getAll, create, getOne, remove, update } = require("../controllers/user.controllers");

const userRouter = express.Router();

userRouter
  .route("/") // Ejm =>> /users
  .get(getAll)
  .post(create);

userRouter
    .route("/:id") // Ejm =>>  /users/1
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = userRouter;
