var db = require("../models/index");

module.exports = function(app) {
  //Categories API
  app.get("/api/categories", function(req, res) {
    db.readCategories(req, res);
  });

  app.post("/api/categories/create", function(req, res) {
    db.createCategory(req, res);
  });

  app.put("/api/categories/update/:id", function(req, res) {
    db.updateCategory(req, res);
  });

  app.delete("/api/categories/delete/:id", function(req, res) {
    db.deleteCategory(req, res);
  });

  //Products API
  app.get("/api/products", function(req, res) {
    db.readProducts(req, res);
  });

  app.post("/api/products/create", function(req, res) {
    db.createProducts(req, res);
  });

  app.put("/api/products/update/:id", function(req, res) {
    db.updateProducts(req, res);
  });

  app.delete("/api/products/delete/:id", function(req, res) {
    db.deleteProduct(req, res);
  });
};
