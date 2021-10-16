function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Grid, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { SingleFileUploadWithProgress } from "./SingleFileUploadWithProgress"; //import { toast } from "react-toastify";

import { UploadError } from "./UploadError";
let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId;
}
/*
export interface UploadableFile {
  // id was added after the video being released to fix a bug
  // Video with the bug -> https://youtube-2021-feb-multiple-file-upload-formik-bmvantunes.vercel.app/bug-report-SMC-Alpha-thank-you.mov
  // Thank you for the bug report SMC Alpha - https://www.youtube.com/channel/UC9C4AlREWdLoKbiLNiZ7XEA
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}
*/


const useStyles = makeStyles(theme => ({
  dropzone: {
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
    height: theme.spacing(10),
    outline: "none"
  }
}));
export default function MultipleFileUploadField({
  lang,
  name,
  url,
  data,
  acceptArray,
  multiple
}) {
  //const [field, meta, helpers] = useField(name);
  console.log(acceptArray);
  console.log(multiple);
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accFiles, rejFiles) => {
    const mappedAcc = accFiles.map(file => ({
      file,
      errors: [],
      id: getNewId()
    }));
    const mappedRej = rejFiles.map(r => ({ ...r,
      id: getNewId()
    }));
    setFiles(curr => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);
  useEffect(() => {
    console.log(files);
  }, [files]);

  function onUpload(file, url) {
    //toast.success("تم تحميل الملف بنجاح");
    setFiles(curr => curr.map(fw => {
      if (fw.file === file) {
        return { ...fw,
          url
        };
      }

      return fw;
    }));
  }

  function onDelete(file) {
    setFiles(curr => curr.filter(fw => fw.file !== file));
  }

  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop,
    accept: acceptArray ? acceptArray : [
    /*'image/*', 'video/*',*/
    ".pdf"],
    multiple: multiple == false ? false : true //maxSize: 300 * 1024, // 300KB

  });
  let selectOrDragPhrase;

  if (lang == "ar") {
    selectOrDragPhrase = "اضغط هنا لرفع الملفات او قم بسحبها الى هذه المنطقة";
  } else {
    selectOrDragPhrase = "Drag 'n' drop some files here, or click to select files";
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "70%",
      padding: "30px",
      textAlign: "center",
      margin: "auto"
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("div", getRootProps({
    className: classes.dropzone
  }), /*#__PURE__*/React.createElement("input", _extends({
    name: "photos"
  }, getInputProps())), /*#__PURE__*/React.createElement("p", null, selectOrDragPhrase))), files.map(fileWrapper => /*#__PURE__*/React.createElement(Grid, {
    item: true,
    key: fileWrapper.id
  }, fileWrapper.errors.length ? /*#__PURE__*/React.createElement(UploadError, {
    file: fileWrapper.file,
    errors: fileWrapper.errors,
    onDelete: onDelete
  }) : /*#__PURE__*/React.createElement(SingleFileUploadWithProgress, {
    onDelete: onDelete,
    onUpload: onUpload,
    file: fileWrapper.file,
    url: url,
    data: data,
    name: name
  })))));
}