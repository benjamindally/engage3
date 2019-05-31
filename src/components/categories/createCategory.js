import React, { Component } from "react";
import categoriesAPI from "../../utils/categoriesAPI";
import Nav from "../nav/nav";

export default class CreateCategories extends Component {
  state = {
    name: "",
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
  saveCategory = () => {
    let newCategory = this.state.name;

    categoriesAPI.createCategory({ newCategory }).then(response => {
      window.location.href = "/categories";
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="text-area-block">
          <h1>What category would you like to add?</h1>
          <br />
          <p>Name:</p>
          <textarea
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />{" "}
          <button
            id={this.props.id}
            className="btn"
            onClick={this.saveCategory}
          >
            Save Category
          </button>
        </div>
      </div>
    );
  }
}
