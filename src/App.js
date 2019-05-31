import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import CreateProduct from "./components/products/createProduct";
import Categories from "./components/categories/Categories";
import CreateCategory from "./components/categories/createCategory";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route
          exact
          path="/categories/create-category"
          component={CreateCategory}
        />

        <Route exact path="/products" component={Products} />
        <Route
          exact
          path="/products/create-product"
          component={CreateProduct}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
