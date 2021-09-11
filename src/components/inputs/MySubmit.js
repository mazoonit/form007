import React from "react";
//import Translate from "react-translate-component";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

export default function Submit({ submitButtonText,color }) {
  return (
    <div className="btn-form">
        <Button size="large" variant="contained" color="primary" type="submit">
          {submitButtonText}
        </Button>
    </div>
  );
}
