function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect } from "react"; //import Translate from "react-translate-component";

import { useForm, useFieldArray } from "react-hook-form";
import MyInput from "./inputs/MyInput.js";
import MySelect from "./inputs/MySelect.js";
import MyCheckBox from "./inputs/MyCheckbox.js";
import ErrorArea from "./errors/ErrorArea.js";
import MySubmit from "./inputs/MySubmit.js";
import { Container, Row, Col } from "reactstrap/";
import "./FormBuilder.css";
import { StylesProvider, jssPreset, ThemeProvider, createTheme } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});
export default function GenericForm({
  rows,
  language = "en",
  languageName = "latinName",
  dictionary = {},
  dir = "ltr",
  title,
  submitHandler,
  grid = {
    xs: 12,
    md: 6
  },
  values,
  noSubmit,
  fullWidth,
  submitButtonText,
  submitButtonFullWidth,
  color
}) {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    onChange,
    setError,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: values
  });

  if (!color) {
    color = "#000";
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: color
      },
      type: "light"
    }
  });

  const onSubmit = data => {
    if (submitHandler) {
      submitHandler(data, setError, language);
    }
  };

  const titleHeader = () => title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      textAlign: "center"
    }
  }, dictionary[language] && dictionary[language][title] ? dictionary[language][title] : title) : null;

  return /*#__PURE__*/React.createElement(StylesProvider, {
    jss: jss
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    className: "genericForm",
    style: fullWidth ? {
      width: "100%"
    } : null
  }, titleHeader(), /*#__PURE__*/React.createElement("form", {
    className: "form",
    dir: dir,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(Container, null, rows && rows.map((inputs, key) => {
    return /*#__PURE__*/React.createElement(Row, {
      key: key
    }, inputs && inputs.map((input, index) => {
      input.label = input.label ? input.label : input.name;
      input.control = control;
      input.errors = errors;
      input.reset = reset;
      input.setValue = setValue;
      input.getValues = getValues;
      input.language = language;
      input.languageName = languageName;
      input.onChange = onChange;
      input.handleSubmit = handleSubmit;
      input.translate = dictionary[language] && dictionary[language][input.label] ? dictionary[language][input.label] : input.label;
      input.placeHolder = dictionary[language] && dictionary[language][input.placeHolder] ? dictionary[language][input.placeHolder] : input.placeHolder;
      input.helperText = dictionary[language] && dictionary[language][input.helperText] ? dictionary[language][input.helperText] : input.helperText;
      input.color = color;
      let xs = input.xs ? input.xs : grid.xs;
      let md = input.md ? input.md : grid.md;
      return /*#__PURE__*/React.createElement(Col, {
        key: index,
        xs: input.fullWidth ? 12 : xs,
        md: input.fullWidth ? 12 : md,
        style: {
          marginBottom: "1rem"
        }
      }, input.type === "select" ? /*#__PURE__*/React.createElement(MySelect, _extends({
        key: key
      }, input)) : input.type === "checkbox" ? /*#__PURE__*/React.createElement(MyCheckBox, _extends({
        key: key
      }, input)) : input.type === "custom" ? /*#__PURE__*/React.createElement(input.component, _extends({
        key: key
      }, input)) : /*#__PURE__*/React.createElement(MyInput, _extends({
        key: key
      }, input)));
    }));
  }), !noSubmit ? /*#__PURE__*/React.createElement(MySubmit, {
    color: color,
    fullWidth: submitButtonFullWidth,
    submitButtonText: dictionary[language] && dictionary[language][submitButtonText] ? dictionary[language][submitButtonText] : "Submit"
  }) : null)))));
}