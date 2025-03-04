const express = require("express");
const app = express();
port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => {
  res.send("More data coming soon");
});

app.listen(port);
