import React from "react";
import { Input, Label } from "reactstrap";

import {
  DisplayBoxClose,
  // DisplayBoxHeader,
  DisplayBoxShape,
  DisplayCustomButtonBlock,
  // DisplayCustomButtonColor,
  DisplayCustomButtonSize,
  DisplayCutomButtonOutline,
  DisplayTextInputRound,
  DisplayTextInputPlaceholder,
  DisplayLayout1,
  DisplayDropdownMenuShape,
  DisplayDropdownRound,
  DisplayTextInputBorder,
  DisplayTextInputSize,
  DisplayCustomButtonBlockLarge,
} from "../../displays";
import "./Display.css";

export default function Display(props) {
  const { changeTheme } = props;

  return (
    <div className="Display-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4>Displays all of the current components</h4>
        <div style={{ fontSize: 16, display: "flex", alignItems: "self-end" }}>
          <Input
            type="checkbox"
            onChange={changeTheme}
            style={{ marginRight: 10, padding: 10 }}
          />
          <Label check style={{ margin: 0 }}>
            Dark theme
          </Label>
        </div>
      </div>

      {/* <DisplayCustomButtonColor colors={["danger", "primary", "success"]} /> */}
      {/* <DisplayCustomButtonColor colors={["info", "warning", "secondary"]} /> */}
      <DisplayCutomButtonOutline />
      <DisplayCustomButtonSize />
      <DisplayCustomButtonBlock />
      <DisplayCustomButtonBlockLarge />
      <DisplayBoxShape />
      {/* <DisplayBoxHeader /> */}
      <DisplayBoxClose />
      <DisplayTextInputRound />
      <DisplayTextInputPlaceholder />
      <DisplayTextInputBorder />
      <DisplayTextInputSize />
      <DisplayDropdownRound />
      <DisplayDropdownMenuShape />
      <DisplayLayout1
        a={["white", "black", "blue"]}
        b={["black", "white", "blue"]}
      />
      <DisplayLayout1
        a={["gray", "black", "blue"]}
        b={["gray", "white", "blue"]}
      />
      <DisplayLayout1
        a={["white", "black", "purple"]}
        b={["white", "black", "green"]}
        c={["white", "black", "red"]}
      />
      <DisplayLayout1
        a={["white", "black", "#815136"]}
        b={["white", "black", "blue"]}
        c={["white", "black", "black"]}
      />
      <DisplayLayout1
        a={["white", "black", "white", "black", "lightgray"]}
        b={["white", "black", "pink", "black"]}
        c={["white", "black", "yellow", "black"]}
      />
      <DisplayLayout1
        a={["white", "black", "orange"]}
        b={["white", "black", "#6c757d"]}
        c={["black", "black", "black"]}
      />
      <br />
    </div>
  );
}
