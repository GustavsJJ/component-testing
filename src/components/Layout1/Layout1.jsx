import { t } from "i18next";
import React from "react";
import { withTranslation } from "react-i18next";
import { Lorem, CustomButton } from "../index";
import "./Layout1.css";

function Layout1(props) {
  const {
    bgColor,
    fontColor,
    accent,
    accentFontColor = "white",
    accentBorder = accent,
  } = props;
  return (
    <div
      className={`Layout1-component`}
      {...props}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <h4>{t("HEADER")}</h4>
      <div className="main-chapter" style={{ marginRight: 20 }}>
        <div
          style={{
            backgroundColor: accent,
            border: `1px solid ${accentBorder}`,
          }}
        />
        <Lorem className="lorem" style={{ textAlign: "justify" }} />
      </div>
      <h5 style={{ color: bgColor === accent ? accentFontColor : accent }}>
        Lorem ipsum dolor sit amet
      </h5>
      <Lorem className="lorem" style={{ textAlign: "justify" }} />
      <div className="bottom-buttons">
        <CustomButton
          style={{
            backgroundColor: accent,
            borderColor: accentBorder,
            color: accentFontColor,
          }}
        >
          {t("CONTINUE")}
        </CustomButton>
        <CustomButton>{t("CANCEL")}</CustomButton>
      </div>
    </div>
  );
}

export default withTranslation()(Layout1);
