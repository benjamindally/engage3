import React, { Component } from "react";
import categoriesAPI from "../../utils/categoriesAPI";
import EditCategory from "./editCategory";
import "../../assets/styles.css";
import Nav from "../nav/nav";

export default class Categories extends Component {
  state = {
    categoriesArray: [],
    editCategory: false,
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

  editCategory = () => {
    this.setState({ editCategory: true });
  };

  doneEditing = (id, newCategoriesInformation) => {
    categoriesAPI
      .updateCategories(id, newCategoriesInformation)
      .then(response => {
        this.readCategories();
        this.setState({ editCategory: false });
      });
  };

  deleteCategory(id, e) {
    if (window.confirm(`Would you like to delete this product?`)) {
      categoriesAPI.deleteCategory(id).then(response => {
        this.readCategories();
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
          <a href="/categories/create-category">
            Click here to create a new Category
          </a>
        </div>
        {this.state.categoriesArray.map(categories => (
          <div className="text-area-block" key={categories.id}>
            <h1>Category: {categories.name}</h1>
            <button
              className="btn"
              onClick={this.editCategory}
              id={categories.id}
            >
              Edit this Category
            </button>
            <button
              className="btn"
              onClick={e => this.deleteCategory(categories.id, e)}
            >
              Delete Category
            </button>
            {this.state.editCategory ? (
              <EditCategory
                id={categories.id}
                category={categories.name}
                doneEditing={this.doneEditing}
              />
            ) : (
              <p />
            )}
          </div>
        ))}
      </div>
    );
  }
}
