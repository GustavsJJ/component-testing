import React from "react";
import { withTranslation } from "react-i18next";
import { Lorem, TextInput } from "../../components";

function DisplayTextInputBorder({ t }) {
  return (
    <div>
      <div style={{ width: 400, textAlign: "left" }}>
        <Lorem />
        <hr />
        <p style={{ marginBottom: 10 }}>{t("ENTER_TEXT")}</p>
        <TextInput size="20" />
      </div>
      <div style={{ width: 400, textAlign: "left" }}>
        <Lorem />
        <hr />
        <p style={{ marginBottom: 10 }}>{t("ENTER_TEXT")}</p>
        <TextInput style={{ border: "2px solid black" }} size="20" />
      </div>
    </div>
  );
}

export default withTranslation()(DisplayTextInputBorder);
