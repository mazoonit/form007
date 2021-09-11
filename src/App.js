import React, { useEffect, useState } from "react";
//import "./components/FormBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBuilder from "./components/FormBuilder";
import ar from "./dictionary/ar";
import en from "./dictionary/en";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App" dir="rtl">
      <button
        onClick={() => {
          language == "en" ? setLanguage("ar") : setLanguage("en");
        }}
      >
        Change Lang
      </button>
      <FormBuilder
        rows={[
          [
            {
              name: "cost",
              label: "cost",
              type: "datetime-local",
              value: "",
              size: "small",
              helperText: "Don't leave it blank",
              variant: "outlined",
              registerObject: {
                required: true,
              },
              fullWidth: false,
            },
            {
              name: "sel",
              label: "cost",
              type: "select",
              size: "small",
              variant: "outlined",
              rows: [{ value: "bla" }, { value: "mazen" }],
              registerObject: {
                required: true,
              },
              value: "bla",
              fullWidth: true,
            },
          ],
          [
            {
              name: "cost",
              label: "cost",
              type: "datetime-local",
              value: "",
              size: "small",
              helperText: "Don't leave it blank",
              variant: "outlined",
              registerObject: {
                required: true,
              },
              fullWidth: false,
            },
            {
              name: "sel",
              label: "cost",
              type: "select",
              size: "small",
              variant: "outlined",
              rows: [{ value: "bla" }, { value: "mazen" }],
              registerObject: {
                required: true,
              },
              value: "bla",
              fullWidth: true,
            },
          ],
          [
            {
              name: "sel",
              label: "cost",
              type: "select",
              size: "small",
              variant: "outlined",
              rows: [{ value: "bla" }, { value: "mazen" }],
              registerObject: {
                required: true,
              },
              value: "bla",
              fullWidth: true,
            },
          ],
        ]}
        values={[]}
        dictionary={{ ar: ar, en: en }}
        language={"ar"}
        submitButtonText={"next"}
      />
    </div>
  );
}
export default App;
