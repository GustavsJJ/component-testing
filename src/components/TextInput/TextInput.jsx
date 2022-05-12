import React from "react";
import "./TextInput.css";

export default function SmallInput(props) {
  return <input className={"SmallInput-component"} type="text" {...props} />;
}
