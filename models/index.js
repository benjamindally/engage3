"use strict";

var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config")[env];
var db = {};

//Start a new sequelize instance
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

//Create the table if it doesn't exist in SQL using sequelize
var Categories = sequelize.define("categories", {
  name: { type: Sequelize.STRING, allowNull: false },
});

//Create a category
db.createCategory = function(req, res) {
  Categories.create({ name: req.body.newCategory }).then(function(response) {
    res.json(response);
  });
};

//Find all the categories database
db.readCategories = function(req, res) {
  Categories.findAll({})
    .then(function(response) {
      res.json(response);
    })
    .catch(err => console.log("error " + err));
};

//update a category (using ES6 instead of ES5)
db.updateCategory = function(req, res) {
  let updateInformation = req.body;
  console.log(updateInformation);
  console.log(req.params.id);
  Categories.update(
    {
      name: updateInformation.name,
    },
    { where: { id: req.params.id } }
  )
    .then(response => res.json(response))
    .catch(err => console.log("update error: " + err));
};

//delete a category (ES6)
db.deleteCategory = function(req, res) {
  Categories.destroy({ where: { id: req.params.id } })
    .then(response => res.json(response))
    .catch(err => console.log("deletion error: " + err));
};

//Create the products table if it doesn't exist in SQL using sequelize
var Products = sequelize.define("Products", {
  //the name in text form
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

//Here we access the products database using sequelize. This could be abstracted to another file but won't for time's sake
//Create the Products
db.createProducts = function(req, res) {
  var newProduct = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
  };
  Products.create(newProduct)
    .then(function(response) {
      res.json(response);
    })
    .catch(err => console.log("error " + err));
};
//Find all the products
db.readProducts = function(req, res) {
  Products.findAll({})
    .then(function(response) {
      res.json(response);
    })
    .catch(err => console.log("error " + err));
};

//update a product (using ES6 instead of ES5)
db.updateProducts = function(req, res) {
  let updateInformation = req.body;
  console.log(updateInformation);
  console.log(req.params.id);
  Products.update(
    {
      name: updateInformation.name,
      description: updateInformation.description,
      category: updateInformation.category,
    },
    { where: { id: req.params.id } }
  )
    .then(response => res.json(response))
    .catch(err => console.log("update error: " + err));
};

//delete a product (ES6)
db.deleteProduct = function(req, res) {
  Products.destroy({ where: { id: req.params.id } })
    .then(response => res.json(response))
    .catch(err => console.log("deletion error: " + err));
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
