import React from "react";
import { withTranslation } from "react-i18next";
import { Lorem, TextInput } from "../../components";

function DisplayTextInputSize({ t }) {
  return (
    <div>
      <div style={{ width: 400, textAlign: "left" }}>
        <Lorem />
        <hr />
        <p style={{ marginBottom: 10 }}>{t("ENTER_TEXT")}</p>
        <TextInput size="20" placeholder={t("ENTER_TEXT_PLACEHOLDER")} />
      </div>
      <div style={{ width: 400, textAlign: "left" }}>
        <Lorem />
        <hr />
        <p style={{ marginBottom: 10, fontSize: 20 }}>{t("ENTER_TEXT")}</p>
        <TextInput
          style={{ fontSize: 30, width: 300 }}
          size="20"
          placeholder={t("ENTER_TEXT_PLACEHOLDER")}
        />
      </div>
    </div>
  );
}

export default withTranslation()(DisplayTextInputSize);
