function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepConnector from "@material-ui/core/StepConnector";
import WifeInformation from "./StepperTabs/WifeInformation";
import HusbandInformation from "./StepperTabs/HusbandInformation";
import FamilyInformation from "./StepperTabs/FamilyInformation";
import HealthStatus from "./StepperTabs/HealthStatus";
import UploadingTab from "./StepperTabs/UploadingTab";
import TermsAndConditionsTab from "./StepperTabs/TermsAndConditionsTab";
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    right: "calc(-50% + 16px)",
    left: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#00f"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#00f"
    }
  },
  line: {
    borderColor: "#ccc",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dir: "rtl"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  active: {
    color: "#00f"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#00f",
    zIndex: 1,
    fontSize: 18
  },
  stepIcon: {
    color: "#ccc",
    "&$completed": {
      color: "#00f"
    },
    "&$active": {
      color: "#00f"
    },
    "&$disabled": {
      color: "#f00"
    }
  }
}));

function getSteps() {
  return ["استمارة دراسة حالة", "بيانات الزوج", "بيانات الزوجة", "بيانات الاسرة", "الحالة الصحية", "تحميل المستندات"];
}

function getStepContent(propsObject) {
  let {
    activeStep
  } = propsObject;

  switch (activeStep) {
    case 0:
      return /*#__PURE__*/React.createElement(TermsAndConditionsTab, propsObject);

    case 1:
      return /*#__PURE__*/React.createElement(HusbandInformation, propsObject);

    case 2:
      return /*#__PURE__*/React.createElement(WifeInformation, propsObject);

    case 3:
      return /*#__PURE__*/React.createElement(FamilyInformation, propsObject);

    case 4:
      return /*#__PURE__*/React.createElement(HealthStatus, propsObject);

    case 5:
      return /*#__PURE__*/React.createElement(UploadingTab, propsObject);

    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return false
    /*step === 1*/
    ;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(Stepper, {
    activeStep: activeStep,
    connector: /*#__PURE__*/React.createElement(QontoConnector, null)
  }, steps.map((label, index) => {
    const stepProps = {};
    const labelProps = {};

    if (isStepOptional(index)) {
      labelProps.optional = /*#__PURE__*/React.createElement(Typography, {
        variant: "caption"
      }, "Optional");
    }

    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }

    return /*#__PURE__*/React.createElement(Step, _extends({
      key: label
    }, stepProps), /*#__PURE__*/React.createElement(StepLabel, _extends({
      StepIconProps: {
        classes: {
          root: classes.stepIcon,
          completed: classes.completed,
          active: classes.active
        }
      }
    }, labelProps), label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, activeStep === steps.length ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    className: classes.instructions
  }, "\u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0628\u0646\u062C\u0627\u062D \u0627\u0646\u062A\u0638\u0631 \u0631\u062F\u0646\u0627 \u0642\u0631\u064A\u0628\u064B\u0627"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleReset,
    className: classes.button
  }, "Reset")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    className: classes.instructions
  }, getStepContent({
    activeStep,
    handleNext,
    handleBack,
    handleSkip,
    isStepOptional,
    steps,
    classes
  })))));
}