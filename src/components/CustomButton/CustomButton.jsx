import React, { Component } from "react";
import { Button } from "reactstrap";
import "./CustomButton.css";

export default class CustomButton extends Component {
  render() {
    return <Button {...this.props} />;
  }
}
