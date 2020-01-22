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

app.get("/hello/:id?", (req, res) => {
  const id = req.params.id;
  if (id) {
    res.json({ status: 200, message: "hello " + id });
  } else res.json({ status: 200, message: "hello" });
});
app.get("/search", (req, res) => {
  const s = req.query.s;
  if (s) {
    res.json({ status: 200, message: "ok", data: s });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: "you have to provide a search!"
    });
  }
});

app.get("/movies/create", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/movies/read", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movies/update", (req, res) => {
  res.json({ message: "ok" });
});

app.get("movies/delete", (req, res) => {
  res.json({ message: "ok" });
});

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
