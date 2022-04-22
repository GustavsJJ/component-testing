import React from "react";
import "./TextInput.css";

export default function SmallInput(props) {
  return (
    <input
      className={`SmallInput-component ${props.round && "border-round"}`}
      type="text"
      {...props}
    />
  );
}
