import React from "react";
import { withTranslation } from "react-i18next";
import { CustomButton, Lorem } from "../../components";

function DisplayCustomButtonBlock({ t }) {
  return (
    <div>
      <div style={{ width: 350 }}>
        <Lorem />
        <CustomButton>{t("READ_MORE")}</CustomButton>
      </div>
      <div style={{ width: 350 }}>
        <Lorem />
        <CustomButton block>{t("READ_MORE")}</CustomButton>
      </div>
    </div>
  );
}

export default withTranslation()(DisplayCustomButtonBlock);
