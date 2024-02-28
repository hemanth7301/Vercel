const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hemanth Sakhamuri porfolio is coming soon");
});

app.listen(3000);
