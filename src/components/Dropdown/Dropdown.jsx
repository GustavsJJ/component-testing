import { t } from "i18next";
import React from "react";
import { withTranslation } from "react-i18next";
import Select from "react-select";

function CustomDropdown(props) {
  const { options, style } = props;
  return (
    <Select
      isSearchable={false}
      styles={{
        control: (provided) => ({
          ...provided,
          ...style?.control,
        }),
        container: (provided) => ({
          ...provided,
          width: 234,
          ...style?.container,
        }),
        menu: (provided) => ({
          ...provided,
          width: 234,
          ...style?.menu,
        }),
        option: (provided) => ({
          ...provided,
          color: "black",
          ...style?.option,
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
      })}
      placeholder={t("SELECT")}
      options={options}
    />
  );
}

export default withTranslation()(CustomDropdown);
