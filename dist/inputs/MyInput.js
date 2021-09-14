function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
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
  placeHolder
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      /*marginTop: "10px"*/
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, translate), /*#__PURE__*/React.createElement(Controller, {
    render: ({
      field
    }) => /*#__PURE__*/React.createElement(TextField, _extends({}, field, {
      helperText: errors[name] ? helperText : null,
      error: errors[name] ? true : false,
      fullWidth: fullWidth,
      id: (variant ? variant : "outlined") + "-basic",
      variant: variant ? variant : "outlined",
      size: size ? size : "small",
      id: name,
      placeholder: placeHolder,
      type: type
    })),
    name: name,
    control: control,
    rules: registerObject,
    defaultValue: value
  }));
}