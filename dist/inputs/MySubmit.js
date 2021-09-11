import React from "react"; //import Translate from "react-translate-component";

import Button from "@material-ui/core/Button";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
export default function Submit({
  submitButtonText,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "btn-form"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large",
    variant: "contained",
    color: "primary",
    type: "submit"
  }, submitButtonText));
}