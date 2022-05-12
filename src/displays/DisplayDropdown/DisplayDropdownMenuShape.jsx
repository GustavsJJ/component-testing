import React from "react";
import { Dropdown } from "../../components";
import { withTranslation } from "react-i18next";

function DisplayDropdownMenuShape({ t }) {
  const options = [];
  for (let i = 1; i < 4; i++)
    options.push({ value: i, label: t("LONG_OPTION", { number: i }) });

  return (
    <div
      style={{
        marginBottom: "200px",
        fontSize: 16,
        display: "grid",
        gridAutoColumns: "minmax(0, 1fr)",
        gridAutoFlow: "column",
      }}
    >
      <div>
        <p style={{ textAlign: "center", marginBottom: 20 }}>
          {t("CHOOSE_AN_OPTION")}
        </p>
        <Dropdown
          options={options}
          style={{
            container: { width: 130 },
            margin: "auto",
          }}
        />
      </div>
      <div>
        <p style={{ textAlign: "left", marginBottom: 20 }}>
          {t("CHOOSE_AN_OPTION")}
        </p>
        <Dropdown options={options} />
      </div>
    </div>
  );
}

export default withTranslation()(DisplayDropdownMenuShape);
