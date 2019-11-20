import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "./ImageWidget";


const AcademicTutors = () => {
  return (
      <section>
        <ImageWidget title={descriptions.primary.title} description={descriptions.primary.description}/>
        <ImageWidget title={descriptions.high.title} description={descriptions.high.description}/>
        <ImageWidget title={descriptions.international.title} description={descriptions.international.description} list={descriptions.international.list}/>
      </section>
  )
};

export default AcademicTutors;
