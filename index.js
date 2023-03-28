const express = require("express");
const app = require("./server");
const app = express();
const port = 8080;

require("dotenv").config();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
