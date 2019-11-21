import React from "react";
import texts from "../../../constants/texts";
import CanvasWidget from "../widgets/CanvasWidget";
import description from "../../../constants/SignupSteps";
import ListItem from "../../listItems";

const SignUpToday = () => {
  return (
      <section>
        <div>{texts.howToBe}</div>
        <CanvasWidget title={description.registration.title} paragraph={ListItem(description.registration.paragraph)}/>
        <hr/>
        <CanvasWidget title={description.screening.title} paragraph={description.screening.paragraph}/>
        <hr/>
        <CanvasWidget title={description.placement.title} paragraph={description.placement.paragraph}/>
        <hr/>
        <CanvasWidget title={description.evaluation.title} paragraph={description.evaluation.paragraph}/>
      </section>
  );
};

export default SignUpToday;
