import React from "react";
import { CustomButton, Lorem } from "../../components";

export default function DisplayCustomButtonSize() {
  return (
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
  );
}
