import { Grid, LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FileHeader } from "./FileHeader"; //import { toast } from "react-toastify";

/*
export interface SingleFileUploadWithProgressProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}
*/

export function SingleFileUploadWithProgress({
  name,
  file,
  url,
  data,
  onDelete,
  onUpload
}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    async function upload() {
      const combinedURL = await uploadFile(file, url, data, name, setProgress);
      onUpload(file, combinedURL);
    }

    upload();
  }, []);
  return /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(FileHeader, {
    file: file,
    onDelete: onDelete
  }), /*#__PURE__*/React.createElement(LinearProgress, {
    variant: "determinate",
    value: progress
  }));
}

function uploadFile(file, url, data, name, onProgress) {
  const combinedURL = "http://localhost:7070" + url;
  const key = "docs_upload_example_us_preset";
  console.log("here");
  console.log(data);
  console.log(url);
  let token = JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).token;
  let companyToken = JSON.parse(localStorage.getItem("company")) && JSON.parse(localStorage.getItem("company")).token;
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", combinedURL);
    /*
    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      console.log(resp);
      res();
    };
    */

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          res();
        } else {
          //toast.error("حدث خطأ! لم يتم تحميل الملف ,حاول مرة اخرى ");
          rej();
        }
      }
    };

    xhr.onerror = evt => rej(evt);

    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        const percentage = event.loaded / event.total * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("name", name);
    formData.append("file", file);
    formData.append("upload_preset", key);
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.setRequestHeader("companyAuthorization", `Bearer ${companyToken}`);
    xhr.send(formData);
  });
}