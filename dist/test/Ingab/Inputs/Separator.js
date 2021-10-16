import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";
import { useFieldArray, useWatch } from "react-hook-form";
import moment from "moment-hijri";
import MyInput from "form007/dist/inputs/MyInput";
import "@deskpro/react-datepicker-hijri/dist/react-datepicker.css";
export default function Separator({
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
  translate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: "10px",
      marginTop: "10px",
      color: "#000"
    }
  }, translate));
}