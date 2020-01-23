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

app.get("/movies/add?", (req, res) => {
  const rating = req.query.rating;
  const year = req.query.year;
  const title = req.query.title;

  let errors = [];

  if (!year) {
    errors.push({ status: 403, error: true, message: "please enter a year" });
  } else if (year.length !== 4) {
    errors.push({ status: 403, error: true, message: "please enter 4 digits" });
  } else if (!parseInt(year)) {
    errors.push({
      status: 403,
      error: true,
      message: "year should be a number"
    });
  } else if (!title) {
    errors.push({ status: 403, error: true, message: "should enter a title" });
  } else if (parseInt(title)) {
    errors.push({
      status: 403,
      error: true,
      message: "title should be a string"
    });
  }

  if (errors.length > 0) {
    res.json({ status: 403, error: true, messages: errors });
  } else if (!rating) {
    movies.push({ title: title, year: year, rating: 4 });
    res.json({ title: title, year: year, rating: 4 });
  } else {
    movies.push({ title: title, year: year, rating: rating });
    res.json({ title: title, year: year, rating: rating });
  }
});

app.get("/movies/read", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movies/read/by-date", (req, res) => {
  function sortByYear(a, b) {
    return a.year - b.year;
  }
  let moviesByYear = movies.sort(sortByYear);
  res.json({ status: 200, data: moviesByYear });
});

app.get("/movies/read/by-rating", (req, res) => {
  function sortByRate(a, b) {
    return a.rating - b.rating;
  }
  let moviesByRate = movies.sort(sortByRate);
  res.json({ status: 200, data: moviesByRate });
});

app.get("/movies/read/by-title", (req, res) => {
  function sortByTitle(a, b) {
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  }
  let moviesByTitle = movies.sort(sortByTitle);
  res.json({ status: 200, data: moviesByTitle });
});

app.get("/movies/read/id/:id?", (req, res) => {
  const id = req.params.id;
  if (id <= movies.length && id > 0) {
    res.json({ status: 200, data: movies[id - 1] });
  } else {
    res.send({
      status: 404,
      error: true,
      message: "the movie " + id + " does not exist"
    });
  }
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
