import React, { useState } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useFieldArray, useWatch } from "react-hook-form";
const options = [{
  value: "a",
  label: "دواء أ"
}, {
  value: "b",
  label: "دواء ب"
}, {
  value: "c",
  label: "دواء ج"
}];
export default function CustomMultiSelect({
  name,
  value,
  size,
  registerObject,
  control,
  reset,
  setValue,
  errors,
  rows,
  translate,
  color
}) {
  const handleChange = data => {
    if (rows.length) {
      rows.map(row => {
        setValue(row.value, false);
      });
    }

    if (data.length) {
      data.map(row => {
        setValue(row.value, true);
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color,
      marginTop: "10px"
    }
  }, translate), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(Select, {
    isMulti: true,
    options: rows,
    className: "basic-multi-select",
    classNamePrefix: "select",
    onChange: handleChange,
    style: {
      maxWidth: "100px"
    }
  }))));
}