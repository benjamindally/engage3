import React, { Component } from "react";
import categoriesAPI from "../../utils/categoriesAPI";
export default class EditProduct extends Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    category: "",
    categoriesArray: [],
  };

  componentDidMount() {
    this.readCategories();
  }

  readCategories = () => {
    categoriesAPI.readCategories().then(response => {
      this.setState({ categoriesArray: response.data });
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

  doneEditing = event => {
    event.preventDefault();
    let newProductInformaiton = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
    };
    let id = this.props.id;

    this.props.doneEditing(id, newProductInformaiton);
  };
  render() {
    return (
      <div>
        <h4>Name:</h4>
        <textarea
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />{" "}
        <br />
        <h4>Description:</h4>
        <textarea
          value={this.state.description}
          name="description"
          onChange={this.handleChange}
        />
        <br />
        <h4>Category:</h4>
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
        <br />
        <button id={this.props.id} className="btn" onClick={this.doneEditing}>
          Done Editing
        </button>
      </div>
    );
  }
}
