import React from "react";
import { Controller } from "react-hook-form";
/*import { Select, MenuItem, FormControl } from "@material-ui/core";*/
//import Translate from "react-translate-component";

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import Select from "react-select"; // Configure JSS

const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});
export default function MySelect({
  name,
  language,
  translate,
  lang,
  value,
  rows,
  control,
  errors,
  helperText,
  handleChange,
  variant,
  size,
  translateType,
  color,
  fullWidth,
  maxWidth,
  minWidth,
  arrayFlag,
  defaultValue,
  latinArabicIdProcessing,
  languageName,
  labelMargin
}) {
  if (latinArabicIdProcessing) {
    let parsedRows = [];
    rows.map(row => {
      let parsedRow = {};
      parsedRow.value = row.id;
      parsedRow.label = row[languageName];
      parsedRows.push(parsedRow);
    });
    rows = parsedRows;
  }

  if (!color) {
    color = "#000";
  }

  let defaultLabelMargin = "0 0 0.75rem 0";
  defaultLabelMargin = labelMargin ? labelMargin : defaultLabelMargin;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color,
      margin: 0,
      margin: defaultLabelMargin
    }
  }, translate ? translate : name), /*#__PURE__*/React.createElement(Controller, {
    name: name,
    control: control,
    defaultValue: value,
    handleChange: handleChange && handleChange,
    render: ({
      field
    }) => {
      return /*#__PURE__*/React.createElement(Select, {
        className: "reactSelectFullWidth",
        isRtl: language == "ar" ? true : false,
        isSearchable: true,
        name: name,
        defaultValue: defaultValue ? defaultValue : rows[0],
        options: rows,
        onChange: data => {
          field.onChange(data.value);
        },
        styles: {
          option: (provided, state) => ({ ...provided // color: state.isSelected ? "red" : "blue",

          }),
          menu: (provided, state) => ({ ...provided,
            borderBottom: "1px dotted pink",
            color: color
          }),
          input: (provided, state) => ({ ...provided,
            paddingTop: 5,
            paddingBottom: 5
          })
        },
        theme: theme => ({ ...theme,
          borderRadius: 0,
          colors: { ...theme.colors,
            //primary25: color,
            primary: color
          },
          padding: 50
        })
      });
    }
  }));
}