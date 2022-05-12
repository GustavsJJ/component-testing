import React from "react";
import { withTranslation } from "react-i18next";
import { Box, CustomButton, Lorem } from "../../components";

function DisplayBoxShape({ t }) {
  return (
    <div>
      <Box x style={{ textAlign: "start" }}>
        <Lorem />
        <CustomButton style={{ borderRadius: 0 }}>{t("CONTINUE")}</CustomButton>
      </Box>
      <Box x style={{ textAlign: "start", borderRadius: 20 }}>
        <Lorem />
        <CustomButton style={{ borderRadius: 10 }}>
          {t("CONTINUE")}
        </CustomButton>
      </Box>
      <Box x style={{ textAlign: "start", borderRadius: "40px 0" }}>
        <Lorem />
        <CustomButton>{t("CONTINUE")}</CustomButton>
      </Box>
    </div>
  );
}

export default withTranslation()(DisplayBoxShape);
