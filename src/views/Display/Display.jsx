import React, { Component } from "react";
import {
  DisplayBoxClose,
  DisplayBoxHeader,
  DisplayBoxShape,
  DisplayCustomButtonBlock,
  DisplayCustomButtonColor,
  DisplayCustomButtonSize,
  DisplayCutomButtonOutline,
} from "../../displays";
import "./Display.css";

export default class Display extends Component {
  render() {
    return (
      <div className="Display-container">
        <h4>Displays all of the current components</h4>
        <DisplayCustomButtonColor colors={["danger", "primary", "success"]} />
        <DisplayCustomButtonColor colors={["info", "warning", "secondary"]} />
        <DisplayCutomButtonOutline />
        <DisplayCustomButtonSize />
        <DisplayCustomButtonBlock />
        <DisplayBoxShape />
        <DisplayBoxHeader />
        <DisplayBoxClose />
      </div>
    );
  }
}
