import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
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
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0645\u0631 \u0627\u0644\u0632\u0648\u062C\u0629 \u0623\u0642\u0644 \u0645\u0646 37 \u0639\u0627\u0645"), /*#__PURE__*/React.createElement("li", null, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0645\u0631 \u0627\u0644\u0632\u0648\u062C\u0629 \u0623\u0642\u0644 \u0645\u0646 37 \u0639\u0627\u0645"), /*#__PURE__*/React.createElement("li", null, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0645\u0631 \u0627\u0644\u0632\u0648\u062C\u0629 \u0623\u0642\u0644 \u0645\u0646 37 \u0639\u0627\u0645"), /*#__PURE__*/React.createElement("li", null, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0645\u0631 \u0627\u0644\u0632\u0648\u062C\u0629 \u0623\u0642\u0644 \u0645\u0646 37 \u0639\u0627\u0645"), /*#__PURE__*/React.createElement("li", null, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0645\u0631 \u0627\u0644\u0632\u0648\u062C\u0629 \u0623\u0642\u0644 \u0645\u0646 37 \u0639\u0627\u0645"), /*#__PURE__*/React.createElement("li", null, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0645\u0631 \u0627\u0644\u0632\u0648\u062C\u0629 \u0623\u0642\u0644 \u0645\u0646 37 \u0639\u0627\u0645")), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: isChildren,
      onChange: () => {
        setIsChildren(!isChildren);
        setValue(name, !isChildren);
      },
      color: "primary"
    }),
    label: translate
  }));
}