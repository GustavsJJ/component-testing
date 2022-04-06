import React from "react";
import { CustomButton } from "../../components";

export default function DisplayCustomButton(props) {
  return (
    <div>
      {props.colors.map((color) => (
        <CustomButton color={color}>Press Me</CustomButton>
      ))}
    </div>
  );
}
