import React from "react";
import { withTranslation } from "react-i18next";
import { CustomButton, Lorem } from "../../components";

function DisplayCutomButtonOutline({ t }) {
  return (
    <div>
      <div style={{ width: 300 }}>
        <Lorem />
        <CustomButton>{t("BUTTON", { number: 1 })}</CustomButton>
      </div>
      <div style={{ width: 300 }}>
        <Lorem />
        <CustomButton outline>{t("BUTTON", { number: 2 })}</CustomButton>
      </div>
    </div>
  );
}

export default withTranslation()(DisplayCutomButtonOutline);
