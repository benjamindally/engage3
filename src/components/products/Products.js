import React, { Component } from "react";
import productsAPI from "../../utils/productsAPI";
import EditProduct from "./editProduct";
import Nav from "../nav/nav";

export default class Products extends Component {
  state = {
    productsArray: [],
    editProduct: false,
  };

  componentDidMount() {
    this.readProducts();
  }

  readProducts = () => {
    productsAPI.readProducts().then(response => {
      if (response) {
        this.setState({ productsArray: response.data });
      }
    });
  };

  editProduct = () => {
    this.setState({ editProduct: true });
  };

  doneEditing = (id, newProductInformation) => {
    productsAPI.updateProducts(id, newProductInformation).then(response => {
      this.readProducts();
      this.setState({ editProduct: false });
    });
  };

  deleteProduct(id, e) {
    if (window.confirm(`Would you like to delete this product?`)) {
      productsAPI.deleteProduct(id).then(response => {
        this.readProducts();
      });
    } else {
      console.log(`Cancelled`);
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="link_wrapper">
          <a href="/products/create-product">
            Click here to create a new product
          </a>
        </div>
        {this.state.productsArray.map(products => (
          <div className="text-area-block" key={products.id}>
            {this.state.editProduct ? (
              <div>
                <h1>Edit {products.name}</h1>
                <EditProduct
                  id={products.id}
                  description={products.description}
                  category={products.category}
                  name={products.name}
                  doneEditing={this.doneEditing}
                />
              </div>
            ) : (
              <div>
                <h1>Product Name: {products.name}</h1>
                <h4>Product Description: {products.description}</h4>
                <div className="text-area-block__categories">
                  Category: {products.category}
                </div>
                <div className="btn-wrapper">
                  <button
                    className="btn"
                    onClick={this.editProduct}
                    id={products.id}
                  >
                    Edit this product
                  </button>
                  <button
                    className="btn"
                    onClick={e => this.deleteProduct(products.id, e)}
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
