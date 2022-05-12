import React from "react";
import { withTranslation } from "react-i18next";
import { Dropdown } from "../../components";

function DisplayDropdownRound({ t }) {
  const options = [];
  for (let i = 1; i < 4; i++)
    options.push({ value: i, label: t("OPTION", { number: i }) });

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
        <p style={{ textAlign: "left", marginBottom: 20 }}>
          {t("CHOOSE_AN_OPTION")}
        </p>
        <Dropdown
          options={options}
          style={{
            control: {
              borderRadius: 10,
            },
            menu: {
              borderRadius: 10,
            },
            option: {
              borderRadius: 10,
            },
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

export default withTranslation()(DisplayDropdownRound);
