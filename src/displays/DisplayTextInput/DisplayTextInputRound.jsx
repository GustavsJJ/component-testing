import React from "react";
import { TextInput } from "../../components";

export default function DisplayTextInputRound() {
  return (
    <div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>Enter text here:</p>
        <TextInput size="20" />
      </div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>Enter text here:</p>
        <TextInput round size="20" />
      </div>
    </div>
  );
}
