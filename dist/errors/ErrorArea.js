import React from "react";
export default function ErrorArea({
  errors
}) {
  return /*#__PURE__*/React.createElement("div", null, errors ? Object.keys(errors).map(key => {
    return /*#__PURE__*/React.createElement("div", {
      id: "error-area"
    }, errors[key].message ? errors[key].message : errors[key].type);
  }) : null);
}