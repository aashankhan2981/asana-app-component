const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const route = require('./pages/api/index')
const app = express();
const port = process.env.PORT|| 4000;
const { Config } = require('./pages/helper/index');
var asana = require('asana');
app.use(express.json());

app.use(
  cors({
    origin: "https://app.asana.com",
  })
);

// Run before every API request
app.use((req, res, next) => {
  // Assess timeliness (https://developers.asana.com/docs/timeliness)
  const expirationDate = req.query.expires_at || req.body.expires_at;
  const currentDate = new Date();

  if (currentDate.getTime() > new Date(expirationDate).getTime()) {
    console.log("Request expired.");
    return;
  }

  

  next();
});

route(app,asana,Config)








    app.listen(port, function () {
    console.log(
      `App listening on port ${port}! Go to http://localhost:${port}/`
    );
  });
  module.exports = app;