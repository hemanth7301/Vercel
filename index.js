const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hemanth Sakhamuri portfolio is coming soon");
});

app.listen(3000);
