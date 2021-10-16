function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import FormBuilder from "form007/dist/FormBuilder"; //import ar from "../../langs/ar";
//import en from "../../langs/en";

import ConditionalTextInputs from "../Inputs/ConditionalTextInputs";
import HijriDate from "../Inputs/HijriDate";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepperControllerButtons from "../Inputs/StepperControllerButtons";
import CustomMultiSelect from "../Inputs/CustomMultiSelect";
import Separator from "../Inputs/Separator";
const ar = {};
const en = {};
export default function HealthStatus(stepperProps) {
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
      name: "reproductiveHealth",
      label: "reproductiveHealth",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "delayedChildBearing",
      label: "delayedChildBearing",
      type: "number",
      value: "",
      size: "small",
      registerObject: {//required: true,
      }
    }], [{
      name: "doctorName",
      label: "doctorName",
      type: "text",
      value: "",
      size: "small",
      registerObject: {//required: true,
      }
    }, {
      name: "hospitalName",
      label: "hospitalName",
      type: "text",
      value: "",
      size: "small",
      registerObject: {//required: true,
      }
    }], [{
      name: "doctorDiagnose",
      label: "doctorDiagnose",
      type: "custom",
      value: "",
      size: "small",
      rows: [{
        value: "diagnose1",
        label: "تشخيص 1"
      }, {
        value: "diagnose2",
        label: "تشخيص 2"
      }],
      component: props => /*#__PURE__*/React.createElement(CustomMultiSelect, props)
    }], [{
      name: "usedDrugs",
      label: "usedDrugs",
      type: "custom",
      value: "",
      size: "small",
      rows: [{
        value: "diagnose1",
        label: "تشخيص 1"
      }, {
        value: "diagnose2",
        label: "تشخيص 2"
      }],
      component: props => /*#__PURE__*/React.createElement(ConditionalTextInputs, props)
    }], [{
      name: "husbandHealthState",
      label: "husbandHealthState",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "husbandChronicDiseases",
      label: "husbandChronicDiseases",
      type: "custom",
      value: "",
      size: "small",
      rows: [{
        value: "diagnose1",
        label: "تشخيص 1"
      }, {
        value: "diagnose2",
        label: "تشخيص 2"
      }],
      component: props => /*#__PURE__*/React.createElement(ConditionalTextInputs, props)
    }], [{
      name: "wifeHealthState",
      label: "wifeHealthState",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "wifeChronicDiseases",
      label: "wifeChronicDiseases",
      type: "custom",
      value: "",
      size: "small",
      rows: [{
        value: "diagnose1",
        label: "تشخيص 1"
      }, {
        value: "diagnose2",
        label: "تشخيص 2"
      }],
      component: props => /*#__PURE__*/React.createElement(ConditionalTextInputs, props)
    }], [{
      name: "fsh",
      label: "fsh",
      type: "number",
      value: "",
      size: "small",
      registerObject: {//required: true,
      }
    }], [{
      name: "weight",
      label: "weight",
      type: "number",
      value: "",
      size: "small",
      registerObject: {//required: true,
      }
    }, {
      name: "height",
      label: "height",
      type: "number",
      value: "",
      size: "small",
      registerObject: {//required: true,
      }
    }], [{
      name: "familyHealthState",
      label: "familyHealthState",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "thePsychologicalImpactOfTheConditionAsResultOfDelayedChildbearing",
      label: "thePsychologicalImpactOfTheConditionAsResultOfDelayedChildbearing",
      type: "custom",
      value: "",
      size: "small",
      rows: [{
        value: "diagnose1",
        label: "تشخيص 1"
      }, {
        value: "diagnose2",
        label: "تشخيص 2"
      }],
      component: props => /*#__PURE__*/React.createElement(CustomMultiSelect, props)
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