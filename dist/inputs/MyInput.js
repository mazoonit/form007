function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Controller } from "react-hook-form";
import { TextField, InputLabel } from "@material-ui/core";
export default function MyInput({
  name,
  translate,
  type,
  value,
  helperText,
  size,
  control,
  registerObject,
  errors,
  variant,
  color,
  fullWidth,
  placeHolder,
  labelMargin,
  enableLabel = false
}) {
  let defaultLabelMargin = "0 0 1rem 0 ";

  switch (variant) {
    case "outlined":
      defaultLabelMargin = "0 0 1rem 0";
      break;

    case "filled":
      defaultLabelMargin = "0 0 0.5rem 0";
      break;

    case "standard":
      defaultLabelMargin = "0 0 0.5rem 0";
      break;
  }

  defaultLabelMargin = labelMargin ? labelMargin : defaultLabelMargin;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      /*marginTop: "10px"*/
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color,
      margin: defaultLabelMargin
    }
  }, translate), /*#__PURE__*/React.createElement(Controller, {
    render: ({
      field
    }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextField, _extends({}, field, {
      key: translate,
      helperText: errors[name] ? helperText : null,
      error: errors[name] ? true : false,
      fullWidth: fullWidth,
      id: (variant ? variant : "Outlined") + "-basic",
      variant: variant ? variant : "outlined",
      size: size ? size : "small",
      id: name,
      placeholder: placeHolder,
      type: type,
      style: {
        padding: 0,
        verticalAlign: "center"
      },
      label: enableLabel ? translate : null,
      isRTL: true
    }))),
    name: name,
    control: control,
    rules: registerObject,
    defaultValue: value
  }));
}