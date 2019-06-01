import React, { Component } from "react";
import productsAPI from "../../utils/productsAPI";
import Nav from "../nav/nav";
import categoriesAPI from "../../utils/categoriesAPI";

export default class CreateProduct extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    categoriesArray: [],
  };

  componentDidMount() {
    this.readCategories();
  }

  readCategories = () => {
    categoriesAPI.readCategories().then(response => {
      if (response) {
        this.setState({ categoriesArray: response.data });
      }
    });
  };
  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  handleChecked = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  saveProduct = () => {
    let newProductInformaiton = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
    };
    console.log(newProductInformaiton);
    productsAPI.createProduct(newProductInformaiton).then(response => {
      window.location.href = "/products";
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="text-area-block">
          <h1>What product would you like to add?</h1>
          <br />
          <p>Name:</p>
          <textarea
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />{" "}
          <br />
          <p>Description:</p>
          <textarea
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <br />
          <p>Category:</p>
          {this.state.categoriesArray.map(categories => (
            <label>
              <input
                type="radio"
                name="category"
                value={categories.name}
                onChange={this.handleChecked}
              />
              {categories.name}
            </label>
          ))}
          {/* <label>
            <input
              type="radio"
              name="category"
              value="Pilsner"
              onChange={this.handleChecked}
            />
            Pilsner
          </label> */}
          <button id={this.props.id} className="btn" onClick={this.saveProduct}>
            Save Product
          </button>
        </div>
      </div>
    );
  }
}
