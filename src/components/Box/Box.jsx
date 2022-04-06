import React from "react";
import { CustomButton } from "../CustomButton";
import "./Box.css";

export default function Box(props) {
  return (
    <div className={`Box-component ${props.round && "round"}`}>
      {(props.header || props.x) && (
        <div className={`Box-component-header ${props.header && "header"}`}>
          <div className="Box-component-header-content">{props.header}</div>
          {props.x && <CustomButton className="Box-header-x" close size="sm" />}
        </div>
      )}
      <div className="Box-component-body">{props.children}</div>
    </div>
  );
}
