import React from "react";
import texts from "../../../constants/texts";
import CircleWidget from "../widgets/CircleWidget";
import description from "../../../constants/SignupSteps";
import ListItem from "../../listItems";

const SignUpToday = () => {
  return (
      <section id="signup-today" className="panel">
        <div className="xtion-title">
          <span className="text">{texts.signUpToday}</span>
        </div>
        <section className="content">
          <div className="title">{texts.howToBe}</div>
          <CircleWidget title={description.registration.title} paragraph={ListItem(description.registration.paragraph)} step={1}/>
          <hr/>
          <CircleWidget title={description.screening.title} paragraph={description.screening.paragraph} step={2}/>
          <hr/>
          <CircleWidget title={description.placement.title} paragraph={description.placement.paragraph} step={3}/>
          <hr/>
          <CircleWidget title={description.evaluation.title} paragraph={description.evaluation.paragraph} step={4}/>
        </section>
      </section>
  );
};

export default SignUpToday;
