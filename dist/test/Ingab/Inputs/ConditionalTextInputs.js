import React, { useState } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useFieldArray, useWatch } from "react-hook-form";
import MyInput from "form007/dist/inputs/MyInput";
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
export default function WifeInformation({
  name,
  value,
  size,
  registerObject,
  control,
  reset,
  setValue,
  errors,
  translate,
  color,
  language
}) {
  const [selectValues, setSelectValues] = useState([]);
  const {
    fields,
    remove,
    append
  } = useFieldArray({
    control,
    name: name,
    defaultValue: {
      hi: "bla"
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color,
      marginTop: "10px"
    }
  }, translate), /*#__PURE__*/React.createElement(Select, {
    isMulti: true,
    name: "colors",
    options: options,
    className: "basic-multi-select",
    classNamePrefix: "select",
    onChange: data => {
      setSelectValues(data);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "5px",
      marginBottom: "15px"
    }
  }, selectValues && selectValues.map(selectValue => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement(MyInput, {
      control: control,
      errors: errors,
      name: `${selectValue.value}DrugName`,
      language: language,
      translate: `اسم الدواء (${selectValue.label})`,
      type: "text",
      variant: "outlined",
      size: "small",
      color: color,
      fullWidth: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement(MyInput, {
      control: control,
      errors: errors,
      name: `${selectValue.value}Dosage`,
      language: language,
      translate: "الجرعة",
      type: "number",
      variant: "outlined",
      size: "small",
      color: color
    }))));
  })));
}