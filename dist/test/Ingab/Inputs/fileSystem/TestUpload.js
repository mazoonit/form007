import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
};
const activeStyle = {
  borderColor: "#2196f3"
};
const acceptStyle = {
  borderColor: "#00e676"
};
const rejectStyle = {
  borderColor: "#ff1744"
};
export default function Basic(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone();
  const style = useMemo(() => ({ ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [isDragActive, isDragReject, isDragAccept]);
  const files = acceptedFiles.map(file => /*#__PURE__*/React.createElement("li", {
    key: file.path
  }, file.path, " - ", file.size, " bytes"));
  return /*#__PURE__*/React.createElement("section", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", getRootProps({
    style
  }), /*#__PURE__*/React.createElement("input", getInputProps()), /*#__PURE__*/React.createElement("p", null, "Drag 'n' drop some files here, or click to select files")), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("h4", null, "Files"), /*#__PURE__*/React.createElement("ul", null, files)));
}