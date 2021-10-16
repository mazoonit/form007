function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import FormBuilder from "form007/dist/FormBuilder"; //import ar from "../../langs/ar";
//import en from "../../langs/en";

import StepperControllerButtons from "../Inputs/StepperControllerButtons";
import Residence from "../Inputs/Residence";
import ConditionalInput from "../Inputs/ConditionalInput";
import IsStable from "../Inputs/IsStable";
import Separator from "../Inputs/Separator";
const ar = {};
const en = {};
export default function FamilyInformation(stepperProps) {
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
      name: "familyInformation",
      label: "familyInformation",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "city",
      label: "city",
      type: "select",
      value: "",
      rows: [{
        value: "Egypt"
      }],
      registerObject: {
        required: true
      },
      variant: "outlined"
    }, {
      name: "neighbourhood",
      label: "neighbourhood",
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
      name: "address",
      label: "address",
      type: "text",
      value: "",
      size: "small"
    }], [{
      name: "residence",
      label: "residence",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Residence, props),
      dualDate: true
    }], [{
      name: "familyIncomeInformation",
      label: "familyIncomeInformation",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "totalMonthlyIncome",
      label: "totalMonthlyIncome",
      type: "number",
      value: "",
      size: "small"
    }], [{
      name: "numberOfChildrenInformation",
      label: "numberOfChildrenInformation",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "numberOfChildren",
      label: "numberOfChildren",
      checkboxLabel: {
        ar: "هل لديكم أطفال ؟",
        en: "Do you have children ?"
      },
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(ConditionalInput, props),
      dualDate: true
    }], [{
      name: "familyGeneralState",
      label: "familyGeneralState",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: "generalConditionOfTheFamilyIsStable",
      label: "generalConditionOfTheFamilyIsStable",
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(IsStable, props),
      dualDate: true
    }], [{
      name: "insuranceCompanyName",
      label: "insuranceCompanyName",
      checkboxLabel: {
        ar: "هل لديك تأمين طبي ؟",
        en: "Do you have medical insurance ?"
      },
      type: "custom",
      value: "",
      size: "small",
      component: props => /*#__PURE__*/React.createElement(ConditionalInput, props),
      dualDate: true
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