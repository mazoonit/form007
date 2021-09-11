import { Button, Grid } from '@material-ui/core';
import React from 'react';
/*
export interface FileHeaderProps {
  file: File;
  onDelete: (file: File) => void;
}
*/

export function FileHeader({
  file,
  onDelete
}) {
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, file.name), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    onClick: () => onDelete(file)
  }, "Delete")));
}