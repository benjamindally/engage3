import React, { Component } from "react";

export default class Links extends Component {
  render() {
    return (
      <div className="homepage-links">
        <a href="/products">Products</a>

        <a href="/products/create-product">Create Product</a>

        <a href="/categories">Category</a>
        <a href="/categories/create-category">Create Category</a>
      </div>
    );
  }
}
