const express = require("express");
const app = express();
const path = require("path");

const routes = [
  "about",
  "bookreadings",
  "blog",
  "grown-up-resources",
  "for-authors",
  "contact",
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/about.html"));
});

app.get("/mission", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/mission.html"));
});
app.get("/bookreadings", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/bookreadings.html"));
});

app.get("/reviews", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/reviews.html"));
});

app.get("/grown-up-resources", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/grown-up-resources.html"));
});

app.get("/for-authors", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/for-authors.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/wpPages/contact.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
