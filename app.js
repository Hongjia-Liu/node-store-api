require("dotenv").config();
const express = require("express");
const app = express();
const { notFountMiddleware } = require("./middleware/not-found");
const { errorHandlerMiddleware } = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Node Store API</h1><a href='/api/v1/products'>Products Route</a>"
    );
});

app.use(notFountMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect to the database
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
