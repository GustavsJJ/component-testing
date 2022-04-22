import React from "react";
import { TextInput } from "../../components";

export default function DisplayTextInputPlaceholder() {
  return (
    <div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>Enter text here:</p>
        <TextInput size="20" />
      </div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>Enter text here:</p>
        <TextInput placeholder="Write something..." size="20" />
      </div>
    </div>
  );
}
