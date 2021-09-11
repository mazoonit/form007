function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import FormBuilder from "form007/dist/FormBuilder"; //import ar from "../../langs/ar";
//import en from "../../langs/en";

import StepperControllerButtons from "../Inputs/StepperControllerButtons";
import Separator from "../Inputs/Separator";
import TermsAndConditions from "../Inputs/TermsAndConditions";
const ar = {};
const en = {};
export default function TermsAndConditionsTab(stepperProps) {
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
      name: "pleaseReadTermsAndConditions",
      label: "pleaseReadTermsAndConditions",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "acceptTermsAndConditions",
      label: "acceptTermsAndConditions",
      type: "custom",
      value: false,
      size: "row",
      registerObject: {
        required: true
      },
      component: props => /*#__PURE__*/React.createElement(TermsAndConditions, props)
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