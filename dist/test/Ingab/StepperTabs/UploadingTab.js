function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import FormBuilder from 'form007/dist/FormBuilder'; //import ar from "../../langs/ar";
//import en from "../../langs/en";

import StepperControllerButtons from '../Inputs/StepperControllerButtons';
import UploadFile from '../Inputs/UploadFile';
import Separator from '../Inputs/Separator';
const ar = {};
const en = {};
export default function UploadingTab(stepperProps) {
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
      textAlign: 'justify'
    }
  }, /*#__PURE__*/React.createElement(FormBuilder, {
    rows: [[{
      name: 'pleaseAttachFiles',
      label: 'pleaseAttachFiles',
      type: 'custom',
      value: '',
      size: 'small',
      component: props => /*#__PURE__*/React.createElement(Separator, props)
    }], [{
      name: 'husbandIdentityCard',
      label: 'husbandIdentityCard',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }, {
      name: 'wifeIdentityCard',
      label: 'wifeIdentityCard',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }], [{
      name: 'marriageContract',
      label: 'marriageContract',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }, {
      name: 'familyRecord',
      label: 'familyRecord',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }], [{
      name: 'certifiedMedicalReport',
      label: 'certifiedMedicalReport',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }, {
      name: 'leaseOrOwnershipContract',
      label: 'leaseOrOwnershipContract',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }], [{
      name: 'definitionOfSalary',
      label: 'definitionOfSalary',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }, {
      name: 'socialSecurityPrint',
      label: 'socialSecurityPrint',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(UploadFile, props)
    }], [{
      name: 'submit',
      label: 'date',
      type: 'custom',
      value: '',
      size: 'row',
      component: props => /*#__PURE__*/React.createElement(StepperControllerButtons, _extends({}, props, stepperProps))
    }]],
    values: [],
    dictionary: {
      ar: ar,
      en: en
    },
    language: 'ar',
    submitButtonText: 'next',
    submitHandler: submitHandler,
    noSubmit: true,
    color: '#00f'
  }));
}