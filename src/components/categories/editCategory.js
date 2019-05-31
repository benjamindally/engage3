import React, { Component } from "react";

export default class EditProduct extends Component {
  state = {
    category: this.props.category,
  };
  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };
  doneEditing = event => {
    event.preventDefault();
    let newCategoryInformaiton = {
      name: this.state.category,
    };
    let id = this.props.id;
    this.props.doneEditing(id, newCategoryInformaiton);
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.category}
          name="category"
          onChange={this.handleChange}
        />{" "}
        <br />
        <button className="btn" id={this.props.id} onClick={this.doneEditing}>
          Done Editing
        </button>
      </div>
    );
  }
}
