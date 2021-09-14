import React, { useEffect, useState } from "react";
//import "./components/FormBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBuilder from "./components/FormBuilder";
import ar from "./dictionary/ar";
import en from "./dictionary/en";
function App() {
  const [language, setLanguage] = useState("en");
  function Login(blah) {
    console.log(blah);
  }
  return (
    <div className="App" dir="rtl">
      <button
        onClick={() => {
          language === "en" ? setLanguage("ar") : setLanguage("en");
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
              type: "text",
              value: "",
              placeHolder:"hello",
              size: "small",
              helperText: "Dontleaveitblank",
              variant: "outlined",
              registerObject: {
                required: true,
              },
              fullWidth: false,
            },
            {
              name: "sel",
              label: "bla",
              type: "select",
              size: "small",
              variant: "outlined",
              rows: [
                { value: "bla", label: "bla" },
                { value: "mazen", label: "label" },
              ],
              registerObject: {
                required: true,
              },
              value: "bla",
              fullWidth: false,
            },
          ],
        ]}
        values={[]}
        dictionary={{ ar: ar, en: en }}
        language={language}
        languageName={language == "ar" ? "arabicName" : "latinName"}
        submitButtonText={"Login"}
        color={"#587fdd"}
        submitHandler={Login}
        noSubmit={false}
        grid={{ xs: 12, md: 6 }}
      />
    </div>
  );
}
export default App;
