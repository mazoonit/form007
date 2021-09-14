import React from "react";
import { Controller } from "react-hook-form";
/*import { Select, MenuItem, FormControl } from "@material-ui/core";*/
//import Translate from "react-translate-component";

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import Select from "react-select"; // Configure JSS

const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});
export default function MySelect({
  name,
  language,
  translate,
  lang,
  value,
  rows,
  control,
  errors,
  helperText,
  handleChange,
  variant,
  size,
  translateType,
  color,
  fullWidth,
  maxWidth,
  minWidth,
  arrayFlag,
  defaultValue,
  latinArabicIdProcessing,
  languageName
}) {
  /*
    if (!control.defaultValuesRef.current[name]) {
        if (!value && rows && rows[0] && rows[0].id) {
            control.defaultValuesRef.current[name] = rows[0].id;
        } else if (!value && rows && rows[0] && rows[0].value) {
            control.defaultValuesRef.current[name] = rows[0].value;
        }
    }
  */
  if (latinArabicIdProcessing) {
    let parsedRows = [];
    rows.map(row => {
      let parsedRow = {};
      parsedRow.value = row.id;
      parsedRow.label = row[languageName];
      parsedRows.push(parsedRow);
    });
    rows = parsedRows;
  }

  if (!color) {
    color = "#000";
  }

  return /*#__PURE__*/React.createElement("label", {
    className: "form-label"
    /*style={{ margin: "20px" }}*/

  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, translate), /*#__PURE__*/React.createElement(Controller, {
    name: name,
    control: control,
    defaultValue: value,
    handleChange: handleChange && handleChange,
    render: ({
      field
    }) => {
      return /*#__PURE__*/React.createElement(Select
      /*
      className="basic-single"
      classNamePrefix="select"
      */
      , {
        className: "reactSelectFullWidth",
        isRtl: language == "ar" ? true : false,
        isSearchable: true,
        name: name,
        defaultValue: defaultValue ? defaultValue : rows[0],
        options: rows,
        onChange: data => {
          field.onChange(data.value);
        }
      })
      /*
        <StylesProvider jss={jss}>
          <Select
            {...field}
            helperText={errors[name] ? helperText : null}
            error={errors[name] ? true : false}
            labelId={name + "Id"}
            label={name}
            id={name}
            defaultValue={defaultValue}
            id={(variant ? variant : "outlined") + "-basic"}
            variant={variant ? variant : undefined}
            size={size ? size : "small"}
          >
            {rows &&
              rows.map((row, idx) => {
                let imaginaryRow={};
                if(arrayFlag){
                  imaginaryRow.value=row;
                  row=imaginaryRow;
                }
                return (
                  <MenuItem
                    key={idx}
                    value={row.id ? row.id : row.value ? row.value : idx}
                  >
                    {row[language]
                      ? row[language]
                      : row.name
                      ? row.name
                      : row.value
                      ? row.value
                      : idx}
                  </MenuItem>
                );
              })}
          </Select>
        </StylesProvider>
        */
      ;
    }
  }));
}