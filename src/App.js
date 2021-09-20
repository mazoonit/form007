import React, { useEffect, useState } from "react";
//import "./components/FormBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBuilder from "./components/FormBuilder";
import ar from "./dictionary/ar";
import en from "./dictionary/en";
import Contacts from "./components/inputs/Contacts";
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
              placeHolder: "hello",
              size: "small",
              helperText: "Dontleaveitblank",
              variant: "filled",
              labelMargin: "0 0 0.5rem 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
              md: 3,
              enableLabel:true
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
              md: 3,
              enableLabel:true
            },
            {
              name: "cost",
              label: "cost",
              type: "text",
              value: "",
              md: 3,
              placeHolder: "hello",
              size: "small",
              helperText: "Dontleaveitblank",
              variant: "outlined",
              labelMargin: "0 0 1rem 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
            },
            {
              name: "cost",
              label: "cost",
              type: "text",
              value: "",
              md: 3,
              placeHolder: "hello",
              size: "small",
              helperText: "Dontleaveitblank",
              variant: "standard",
              labelMargin: "0 0 0.5rem 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
              enableLabel:true
            },
          ],
          [
            {
              name: "contacts",
              type: "custom",
              value: [
                {
                  email: "smazen",
                  mobilePhone: "011",
                  telephone: "03",
                  fax: "22",
                },
              ],
              component: (props) => {
                return <Contacts {...props} />;
              },
              registerObject: {
                required: true,
              },
            },
          ],
        ]}
        values={[]}
        dictionary={{ ar: ar, en: en }}
        language={language}
        languageName={language == "ar" ? "arabicName" : "latinName"}
        dir={language == "ar" ? "rtl" : "ltr"}
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
