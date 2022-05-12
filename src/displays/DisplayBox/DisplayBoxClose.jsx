import React from "react";
import { withTranslation } from "react-i18next";
import { Box, CustomButton, Lorem } from "../../components";

function DisplayBoxClose({ t }) {
  const header = <p>{t("HEADER")}</p>;

  return (
    <div>
      <Box header={header}>
        <Lorem />
        <CustomButton>{t("CLOSE")}</CustomButton>
      </Box>
      <Box header={header} x>
        <Lorem />
      </Box>
    </div>
  );
}

export default withTranslation()(DisplayBoxClose);
