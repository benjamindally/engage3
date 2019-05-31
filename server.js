const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./models");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static assets
app.use(express.static(path.join(__dirname, "client/build")));

// Start the API server
const PORT = process.env.PORT || 3001;

require("./routes/api-routes.js")(app);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
