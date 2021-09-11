import React, { useState, useEffect } from "react";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";
import MyInput from "form007/dist/inputs/MyInput";
import "@deskpro/react-datepicker-hijri/dist/react-datepicker.css";
export default function HijriDate({
  name,
  value,
  size,
  registerObject,
  control,
  reset,
  setValue,
  errors,
  color,
  language,
  translate,
  checkboxLabel
}) {
  const [isChildren, setIsChildren] = useState(false);
  useEffect(() => {
    if (value == 0) {
      setIsChildren(false);
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: isChildren,
      onChange: () => {
        setIsChildren(!isChildren);
      },
      color: "primary"
    }),
    label: checkboxLabel[language]
  }), /*#__PURE__*/React.createElement("br", null)), isChildren ? /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(MyInput, {
    control: control,
    errors: errors,
    name: name,
    language: language,
    translate: translate,
    variant: "outlined",
    size: "small",
    color: color
  }))) : null);
}