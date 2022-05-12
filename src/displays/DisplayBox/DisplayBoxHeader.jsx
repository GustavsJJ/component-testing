import React from "react";
import { withTranslation } from "react-i18next";
import { Box, Lorem } from "../../components";

function DisplayBoxHeader({ t }) {
  const header = <p>Header</p>;

  return (
    <div>
      <Box>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>{t("HEADER")}</p>
        <Lorem />
      </Box>
      <Box header={header}>
        <Lorem />
      </Box>
    </div>
  );
}

export default withTranslation()(DisplayBoxHeader);
