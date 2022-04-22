import React from "react";
import { Lorem, CustomButton } from "../index";
import "./Layout1.css";

export default function Layout1(props) {
  const { bgColor, fontColor, accent } = props;
  return (
    <div
      className={`Layout1-component bg-${bgColor} fontColor-${fontColor}`}
      {...props}
    >
      <h4>Header</h4>
      <div className="main-chapter">
        <div style={{ backgroundColor: accent }} />
        <Lorem className="lorem" />
      </div>
      <h5 style={{ color: accent }}>Lorem ipsum dolor sit amet</h5>
      <Lorem className="lorem" />
      <div className="bottom-buttons">
        <CustomButton style={{ backgroundColor: accent, borderColor: accent }}>
          Accept
        </CustomButton>
        <CustomButton>Cancel</CustomButton>
      </div>
    </div>
  );
}
