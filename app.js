const express = require("express");
const app = express();
const { notFount } = require("./middleware/not-found");

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use(notFount);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
