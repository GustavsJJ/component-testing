import React from "react";
import { CustomButton } from "../../components";

export default function DisplayCutomButtonOutline() {
  return (
    <div>
      <CustomButton>Press Me</CustomButton>
      <CustomButton outline>Press Me</CustomButton>
    </div>
  );
}
