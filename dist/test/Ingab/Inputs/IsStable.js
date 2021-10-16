import React, { useState, useEffect } from "react";
import { Radio, FormControlLabel } from "@material-ui/core";
import "@deskpro/react-datepicker-hijri/dist/react-datepicker.css";
export default function IsStable({
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
  const [generalConditionOfTheFamilyIsStable, setGeneralConditionOfTheFamilyIsStable] = useState(false);
  useEffect(() => {// setValue(name, date);
  }, []);

  const radioHandleChange = e => {
    console.log(e.target.value);
    console.log(generalConditionOfTheFamilyIsStable);
    setGeneralConditionOfTheFamilyIsStable(e.target.value);
    setValue("generalConditionOfTheFamilyIsStable", e.target.value);
  };

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
      value: true,
      checked: generalConditionOfTheFamilyIsStable == "true",
      onChange: radioHandleChange,
      color: "primary"
    }),
    label: "\u0645\u0633\u062A\u0642\u0631",
    labelPlacement: "end"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    style: radioButtonStyle,
    control: /*#__PURE__*/React.createElement(Radio, {
      value: false,
      checked: generalConditionOfTheFamilyIsStable == "false",
      onChange: radioHandleChange,
      color: "primary"
    }),
    label: "\u063A\u064A\u0631 \u0645\u0633\u062A\u0642\u0631",
    labelPlacement: "end"
  })));
}