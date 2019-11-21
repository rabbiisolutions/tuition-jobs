import React from "react";
import texts from "../../constants/texts";
import mobileAccordion from "../accordion";
import AcademicTutors from "./sub/AcademicTutors";
import SkillTutors from "./sub/SkillTutors";
import PaymentOptions from "./sub/PaymentOptions";
import SignUpToday from "./sub/SignupToday";

const name = 'sections-accordion';

const SectionsAccordion = () => {
    const collapses = [];
    collapses.push(
        <div className={name} key={11}>
          {mobileAccordion.toggle(texts.academicTutors)}
          {
            <AcademicTutors/>
          }
        </div>
        ,
        <div className={name} key={12}>
          {mobileAccordion.toggle(texts.skillTutors)}
          {
            <SkillTutors/>
          }
        </div>
        ,
        <div className={name} key={13}>
          {mobileAccordion.toggle(texts.paymentOptions)}
          {
            <PaymentOptions/>
          }
        </div>
        ,
        <div className={name} key={14}>
          {mobileAccordion.toggle(texts.signUpToday)}
          {
            <SignUpToday/>
          }
        </div>
    );

    return ( // return the sections list
        collapses.map((panel) => (panel))
    );
  };

export default SectionsAccordion;
