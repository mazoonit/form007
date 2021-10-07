function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "@material-ui/core"; //import Translate from "react-translate-component";

export default function MyCheckBox({
  name,
  value,
  size,
  registerObject,
  control
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "form-checkLabel"
  }, /*#__PURE__*/React.createElement(Controller, {
    render: ({
      field
    }) => /*#__PURE__*/React.createElement(Checkbox, _extends({}, field, {
      checked: field.value
    })),
    name: name,
    control: control,
    value: value,
    rules: registerObject
  })));
}