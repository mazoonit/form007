import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";
import { useFieldArray, useWatch } from "react-hook-form";
import DatePicker from "@deskpro/react-datepicker-hijri";
import moment from "moment-hijri";
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
  dualDate
}) {
  const [date, setDate] = useState(moment());
  const [hijriCheck, setHijriCheck] = useState(false);
  useEffect(() => {
    setValue(name, date);
  }, []);

  const handleChange = newDate => {
    if (hijriCheck) {
      setDate(newDate);
      setValue(name, newDate);
    } else {
      setValue(name, moment(newDate.target.value));
    }
  };

  let label = language == "ar" ? "هجري" : "Hijri";
  let marginBottomLessStyle = dualDate ? {
    marginBottom: 0
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color,
      ...marginBottomLessStyle
    }
  }, translate), dualDate ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: hijriCheck,
      onChange: () => {
        setHijriCheck(!hijriCheck);
      },
      color: "primary"
    }),
    label: label
  }), /*#__PURE__*/React.createElement("br", null)) : null, hijriCheck ? /*#__PURE__*/React.createElement(DatePicker, {
    selected: date,
    onChange: handleChange,
    calendar: "hijri"
  }) : /*#__PURE__*/React.createElement(TextField, {
    type: "date",
    onChange: handleChange,
    variant: "outlined",
    size: "small"
  }));
}