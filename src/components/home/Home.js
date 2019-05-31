import React, { Component } from "react";
import Nav from "../nav/nav";
import Links from "../links/Links";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Links />
      </div>
    );
  }
}
