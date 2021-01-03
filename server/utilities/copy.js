const axios = require("axios");
const fs = require("fs");

const baseURL = "http://www.barbsbookbuddies.com/home";
const wpSite = axios.create({
  baseURL,
});

const routes = [
  "about",
  "bookreadings",
  "blog",
  "grown-up-resources",
  "for-authors",
  "contact",
];

const getPage = async (route) => {
  const response = await wpSite.get(`/${route}`);
  fs.writeFileSync(`../server/wpPages/${route}.html`, response.data);
};

// routes.forEach(getPage);
getPage("mission");
