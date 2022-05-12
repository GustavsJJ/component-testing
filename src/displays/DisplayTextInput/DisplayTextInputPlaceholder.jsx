import React from "react";
import { withTranslation } from "react-i18next";
import { TextInput } from "../../components";

function DisplayTextInputPlaceholder({ t }) {
  return (
    <div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>
          {t("ENTER_PHONE_NUM")}
        </p>
        <TextInput size="20" />
      </div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>
          {t("ENTER_PHONE_NUM")}
        </p>
        <TextInput placeholder={t("PHONE_NUM_PLACEHOLDER")} size="20" />
      </div>
    </div>
  );
}

export default withTranslation()(DisplayTextInputPlaceholder);
