const express = require("express");

const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let todaysDate = new Date();
  let requiredDateTime = addDays(todaysDate, 100);
  let result = `${requiredDateTime.getDate()}/${
    requiredDateTime.getMonth() + 1
  }/${requiredDateTime.getFullYear()}`;

  response.send(result);
});

module.exports = app;
