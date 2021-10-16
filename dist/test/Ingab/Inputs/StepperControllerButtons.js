import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function StepperControllerButtons({
  activeStep,
  handleNext,
  handleBack,
  handleSkip,
  isStepOptional,
  steps,
  classes
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "10px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button
  }, "\u0627\u0644\u0633\u0627\u0628\u0642"), isStepOptional(activeStep) && /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: handleSkip,
    className: classes.button
  }, "Skip"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    className: classes.button,
    type: "submit"
  }, activeStep === steps.length - 1 ? "تأكيد الاستمارة" : "التالي"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    className: classes.button,
    type: "submit"
  }, "حفظ الإستمارة"));
}