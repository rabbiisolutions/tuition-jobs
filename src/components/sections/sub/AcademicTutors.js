import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "../widgets/ImageWidget";


const AcademicTutors = () => {
  return (
      <section id="academic-tutors" className="panel">
        <div className="tag-line">These are trained teachers who help students revise difficult topics in their academic work</div>
        <ImageWidget
            title={descriptions.primary.title}
            description={descriptions.primary.description}/>
        <hr/>
        <ImageWidget
            title={descriptions.high.title}
            description={descriptions.high.description}/>
        <hr/>
        <ImageWidget
            title={descriptions.international.title}
            description={descriptions.international.description}
            list={descriptions.international.list}/>
      </section>
  )
};

export default AcademicTutors;
