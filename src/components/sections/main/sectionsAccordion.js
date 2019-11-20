import React from "react";
import texts from "../../../constants/texts";
import mobileAccordion from "../../accordion";
import AcademicTutors from "../sub/AcademicTutors";


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

          }
        </div>
        ,
        <div className={name} key={13}>
          {mobileAccordion.toggle(texts.paymentOptions)}
          {

          }
        </div>
        ,
        <div className={name} key={14}>
          {mobileAccordion.toggle(texts.howToBe)}
          {

          }
        </div>
    );

    return ( // return the sections list
        collapses.map((panel) => (panel))
    );
  };

export default SectionsAccordion;
