// import express (after npm install express)
const express = require("express");

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/test", (req, res) => {
  res.json({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  var d = new Date();
  var n = d.getHours();
  var m = d.getMinutes();
  res.json({ status: 200, message: n + ":" + m });
});
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
