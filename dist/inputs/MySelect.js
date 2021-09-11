function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Controller } from "react-hook-form";
import { Select, MenuItem, FormControl } from "@material-ui/core"; //import Translate from "react-translate-component";

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles"; // Configure JSS

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
  arrayFlag
}) {
  /*
    if (!control.defaultValuesRef.current[name]) {
        if (!value && rows && rows[0] && rows[0].id) {
            control.defaultValuesRef.current[name] = rows[0].id;
        } else if (!value && rows && rows[0] && rows[0].value) {
            control.defaultValuesRef.current[name] = rows[0].value;
        }
    }
  */
  if (!color) {
    color = "#000";
  }

  if (!maxWidth) {
    maxWidth = "400px";
  }

  if (!minWidth) {
    minWidth = "100px";
  }

  let defaultValue = "";
  if (value) defaultValue = value;else if (rows && rows[0] && rows[0].id) defaultValue = rows[0].id;else if (rows && rows[0] && rows[0].value) defaultValue = rows[0].value;
  return /*#__PURE__*/React.createElement("label", {
    className: "form-label"
    /*style={{ margin: "20px" }}*/

  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, translate), /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true,
    style: {
      textAlign: "justify",
      maxWidth: maxWidth,
      minWidth: minWidth
    },
    size: size ? size : "small"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: name,
    control: control,
    defaultValue: value,
    handleChange: handleChange && handleChange,
    render: ({
      field
    }) => {
      return /*#__PURE__*/React.createElement(StylesProvider, {
        jss: jss
      }, /*#__PURE__*/React.createElement(Select, _extends({}, field, {
        helperText: errors[name] ? helperText : null,
        error: errors[name] ? true : false,
        labelId: name + "Id",
        label: name,
        id: name,
        defaultValue: defaultValue,
        id: (variant ? variant : "outlined") + "-basic",
        variant: variant ? variant : undefined,
        size: size ? size : "small"
      }), rows && rows.map((row, idx) => {
        let imaginaryRow = {};

        if (arrayFlag) {
          imaginaryRow.value = row;
          row = imaginaryRow;
        }

        return /*#__PURE__*/React.createElement(MenuItem, {
          key: idx,
          value: row.id ? row.id : row.value ? row.value : idx
        }, row[language] ? row[language] : row.name ? row.name : row.value ? row.value : idx);
      })));
    }
  })));
}