import { createStyles, LinearProgress, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { FileError } from 'react-dropzone';
import { FileHeader } from './FileHeader';
/*
export interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}
*/

const ErrorLinearProgress = withStyles(theme => createStyles({
  bar: {
    backgroundColor: theme.palette.error.main
  }
}))(LinearProgress);
export function UploadError({
  file,
  onDelete,
  errors
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileHeader, {
    file: file,
    onDelete: onDelete
  }), /*#__PURE__*/React.createElement(ErrorLinearProgress, {
    variant: "determinate",
    value: 100
  }), errors.map(error => /*#__PURE__*/React.createElement("div", {
    key: error.code
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "error"
  }, error.message))));
}