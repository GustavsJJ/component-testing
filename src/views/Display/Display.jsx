import React, { Component } from "react";
import {
  DisplayBoxClose,
  DisplayBoxHeader,
  DisplayBoxShape,
  DisplayCustomButtonBlock,
  DisplayCustomButtonColor,
  DisplayCustomButtonSize,
  DisplayCutomButtonOutline,
  DisplayTextInputRound,
  DisplayTextInputPlaceholder,
  DisplayLayout1,
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
        <DisplayTextInputRound />
        <DisplayTextInputPlaceholder />
        <DisplayLayout1
          a={["white", "black", "blue"]}
          b={["black", "white", "blue"]}
        />
        <DisplayLayout1
          a={["gray", "black", "orange"]}
          b={["gray", "white", "orange"]}
        />
        <DisplayLayout1
          a={["white", "black", "purple"]}
          b={["white", "black", "green"]}
          c={["white", "black", "red"]}
        />
        <DisplayLayout1
          a={["white", "black", "brown"]}
          b={["white", "black", "blue"]}
          c={["white", "black", "black"]}
        />
        <br />
      </div>
    );
  }
}
