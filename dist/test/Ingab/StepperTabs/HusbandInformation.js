function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import FormBuilder from "form007/dist/FormBuilder"; //import ar from "../../langs/ar";
//import en from "../../langs/en";

import HijriDate from "../Inputs/HijriDate";
import StepperControllerButtons from "../Inputs/StepperControllerButtons";
import Separator from "../Inputs/Separator";
const ar = {};
const en = {};
export default function HusbandInformation(stepperProps) {
  let {
    activeStep,
    handleNext,
    handleBack,
    handleSkip,
    isStepOptional,
    steps,
    classes
  } = stepperProps;

  const submitHandler = async values => {
    handleNext();
    console.log(values);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "justify"
    }
  }, /*#__PURE__*/React.createElement(FormBuilder, {
    rows: [[{
      name: "husbandInformation",
      label: "husbandInformation",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "husbandName",
      label: "husbandName",
      type: "text",
      value: "",
      size: "small"
    }], [{
      name: "husbandBirthday",
      label: "birthday",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(HijriDate, props),
      dualDate: true
    }], [{
      name: "nationality",
      label: "nationality",
      type: "select",
      value: "",
      rows: [{
        value: "Egypt"
      }],
      registerObject: {
        required: true
      },
      variant: "outlined"
    }], [{
      name: "nationalId",
      label: "nationalId",
      type: "number",
      value: "",
      size: "small",
      registerObject: {// required: true,
      }
    }, {
      name: "identitySource",
      label: "identitySource",
      type: "text",
      value: "",
      size: "small",
      registerObject: {//   required: true,
      }
    }], [{
      name: "nationalIdReleaseDate",
      label: "nationalIdReleaseDate",
      type: "custom",
      value: "",
      size: "row",
      component: props => /*#__PURE__*/React.createElement(HijriDate, props)
    }, {
      name: "nationalIdEndDate",
      label: "nationalIdEndDate",
      type: "custom",
      value: "",
      size: "row",
      component: props => /*#__PURE__*/React.createElement(HijriDate, props)
    }], [{
      name: "phoneNumber",
      label: "phoneNumber",
      type: "number",
      value: "",
      size: "small"
    }], [{
      name: "educationLevel",
      label: "educationLevel",
      type: "select",
      value: "",
      rows: [{
        value: "Egypt"
      }],
      registerObject: {
        required: true
      },
      variant: "outlined"
    }], [{
      name: "incomeSource",
      label: "incomeSource",
      type: "select",
      value: "",
      rows: [{
        value: "Egypt"
      }],
      registerObject: {
        required: true
      },
      variant: "outlined"
    }], [{
      name: "submit",
      label: "date",
      type: "custom",
      value: "",
      size: "row",
      component: props => /*#__PURE__*/React.createElement(StepperControllerButtons, _extends({}, props, stepperProps))
    }]],
    values: [],
    dictionary: {
      ar: ar,
      en: en
    },
    language: "ar",
    submitButtonText: "next",
    submitHandler: submitHandler,
    noSubmit: true,
    color: "#00f"
  }));
}