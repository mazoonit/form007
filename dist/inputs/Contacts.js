import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
export default function Contacts({
  value,
  control
}) {
  /*
  const { register, handleSubmit, control, reset, trigger, setError } = useForm(
    {
      // defaultValues: {}; you can populate the fields by this attribute
    }
  );
  */
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: "test",
    defaultValue: value
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, fields.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: item.id
  }, /*#__PURE__*/React.createElement(Controller, {
    render: ({
      field
    }) => /*#__PURE__*/React.createElement("input", field),
    name: `test.${index}.lastName`,
    control: control
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => remove(index)
  }, "Delete")))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => append({
      firstName: "bill",
      lastName: "luo"
    })
  }, "append"), /*#__PURE__*/React.createElement("input", {
    type: "submit"
  }));
}