import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { Radio, Checkbox, TextField, FormControlLabel } from "@material-ui/core";
import { useFieldArray, useWatch } from "react-hook-form";
import DatePicker from "@deskpro/react-datepicker-hijri";
import moment from "moment-hijri";
import MySelect from "form007/dist/inputs/MySelect";
import MyInput from "form007/dist/inputs/MyInput";
import "@deskpro/react-datepicker-hijri/dist/react-datepicker.css";
export default function Residence({
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
  dualDate
}) {
  const [date, setDate] = useState(moment());
  const [residenceSystem, setResidenceSystem] = useState("لا يملك");
  const [hijriCheck, setHijriCheck] = useState(false);
  useEffect(() => {// setValue(name, date);
  }, []);

  const radioHandleChange = e => {
    setResidenceSystem(e.target.value);
    setValue("residenceSystem", e.target.value);
  };

  let label = language == "ar" ? "هجري" : "Hijri";
  let radioButtonStyle = {
    marginLeft: "100px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, translate), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "5px"
    }
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    style: radioButtonStyle,
    control: /*#__PURE__*/React.createElement(Radio, {
      value: "\u0645\u0644\u0643",
      checked: residenceSystem === "ملك",
      onChange: radioHandleChange,
      color: "primary"
    }),
    label: "\u0645\u0644\u0643",
    labelPlacement: "end"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    style: radioButtonStyle,
    control: /*#__PURE__*/React.createElement(Radio, {
      checked: residenceSystem === "إيجار",
      onChange: radioHandleChange,
      value: "\u0625\u064A\u062C\u0627\u0631",
      color: "primary"
    }),
    label: "\u0625\u064A\u062C\u0627\u0631",
    labelPlacement: "end"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    style: radioButtonStyle,
    control: /*#__PURE__*/React.createElement(Radio, {
      checked: residenceSystem === "لا يوجد",
      onChange: radioHandleChange,
      value: "\u0644\u0627 \u064A\u0648\u062C\u062F",
      color: "primary"
    }),
    label: "\u0644\u0627 \u064A\u0648\u062C\u062F",
    labelPlacement: "end"
  })), /*#__PURE__*/React.createElement("br", null), residenceSystem == "ملك" ? /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(MySelect, {
    control: control,
    errors: errors,
    name: "residenceType",
    language: language,
    translate: "نوع السكن",
    rows: [{
      value: "a"
    }],
    variant: "outlined",
    size: "small",
    color: color,
    fullWidth: true
  }))) : residenceSystem == "إيجار" ? /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(MySelect, {
    control: control,
    errors: errors,
    name: "residenceType",
    language: language,
    translate: "نوع السكن",
    rows: [{
      value: "a"
    }],
    variant: "outlined",
    size: "small",
    color: color,
    fullWidth: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(MyInput, {
    control: control,
    errors: errors,
    name: "rentAmount",
    language: language,
    translate: "قيمة الإيجار",
    type: "number",
    variant: "outlined",
    size: "small",
    color: color
  }))) : null);
}