import React from "react";
import texts from "../../../constants/texts";
import CanvasWidget from "../widgets/CanvasWidget";
import description from "../../../constants/SignupSteps";
import ListItem from "../../listItems";

const SignUpToday = () => {
  return (
      <section>
        <div>{texts.howToBe}</div>
        <CanvasWidget title={description.registration.title} paragraph={ListItem(description.registration.paragraph)} step={1}/>
        <hr/>
        <CanvasWidget title={description.screening.title} paragraph={description.screening.paragraph} step={2}/>
        <hr/>
        <CanvasWidget title={description.placement.title} paragraph={description.placement.paragraph} step={3}/>
        <hr/>
        <CanvasWidget title={description.evaluation.title} paragraph={description.evaluation.paragraph} step={4}/>
      </section>
  );
};

export default SignUpToday;
