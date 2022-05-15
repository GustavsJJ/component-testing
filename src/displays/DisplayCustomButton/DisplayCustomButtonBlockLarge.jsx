import React from "react";
import { withTranslation } from "react-i18next";
import { CustomButton, Lorem } from "../../components";

function DisplayCustomButtonBlockLarge({ t }) {
  return (
    <div>
      <div>
        <Lorem />
        <CustomButton>{t("READ_MORE")}</CustomButton>
      </div>
      <div>
        <Lorem />
        <CustomButton block>{t("READ_MORE")}</CustomButton>
      </div>
    </div>
  );
}

export default withTranslation()(DisplayCustomButtonBlockLarge);
