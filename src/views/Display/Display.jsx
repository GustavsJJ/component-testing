import React, { Component } from "react";
import { CustomButton, Lorem } from "../../components";
import "./Display.css";

export default class Display extends Component {
  render() {
    return (
      <div className="Display-container">
        <h4>Displays all of the current components</h4>
        <div>
          <CustomButton color="danger">Press Me</CustomButton>
          <CustomButton color="primary">Press Me</CustomButton>
          <CustomButton color="secondary">Press Me</CustomButton>
        </div>
        <div>
          <CustomButton>Press Me</CustomButton>
          <CustomButton outline>Press Me</CustomButton>
        </div>
        <div>
          <div>
            <Lorem />
            <CustomButton size="sm">Press Me</CustomButton>
          </div>
          <div>
            <Lorem />
            <CustomButton>Press Me</CustomButton>
          </div>
          <div>
            <Lorem />
            <CustomButton size="lg">Press Me</CustomButton>
          </div>
        </div>
        <div>
          <p>a</p>
          <p>b</p>
          <p>c</p>
        </div>
      </div>
    );
  }
}
