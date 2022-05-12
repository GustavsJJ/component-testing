import React from "react";
import { withTranslation } from "react-i18next";
import { CustomButton, Lorem } from "../../components";

function DisplayCustomButtonSize({ t }) {
  return (
    <div>
      <div>
        <Lorem />
        <CustomButton size="sm">{t("READ_MORE")}</CustomButton>
      </div>
      <div>
        <Lorem />
        <CustomButton>{t("READ_MORE")}</CustomButton>
      </div>
      <div>
        <Lorem />
        <CustomButton size="lg">{t("READ_MORE")}</CustomButton>
      </div>
    </div>
  );
}

export default withTranslation()(DisplayCustomButtonSize);
