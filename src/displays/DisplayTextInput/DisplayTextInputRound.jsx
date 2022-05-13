import React from "react";
import { withTranslation } from "react-i18next";
import { TextInput } from "../../components";

function DisplayTextInputRound({ t }) {
  return (
    <div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>{t("ENTER_TEXT")}</p>
        <TextInput size="20" style={{ borderRadius: 0 }} />
      </div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>{t("ENTER_TEXT")}</p>
        <TextInput size="20" style={{ borderRadius: 10 }} />
      </div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 10 }}>{t("ENTER_TEXT")}</p>
        <TextInput size="20" style={{ borderRadius: 20 }} />
      </div>
    </div>
  );
}

export default withTranslation()(DisplayTextInputRound);
