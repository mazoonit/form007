import MultipleFileUploadField from "./fileSystem/MultipleFileUploadField.js";
import React, { useState, useEffect } from "react";
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
  translate,
  data,
  uploadName,
  url
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, translate), /*#__PURE__*/React.createElement(MultipleFileUploadField, {
    url: url,
    lang: language,
    data: data,
    name: uploadName
  })));
}