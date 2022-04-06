import React from "react";
import { CustomButton, Lorem } from "../../components";

export default function DisplayCustomButtonBlock() {
  return (
    <div>
      <div>
        <Lorem />
        <CustomButton>Press me</CustomButton>
      </div>
      <div>
        <Lorem />
        <CustomButton block>Press me</CustomButton>
      </div>
    </div>
  );
}
