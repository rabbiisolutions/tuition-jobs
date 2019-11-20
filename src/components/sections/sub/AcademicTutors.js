import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "./ImageWidget";


const AcademicTutors = () => {
  return (
      <section>
        <ImageWidget title={descriptions.primary.title} description={descriptions.primary.description}/>
      </section>
  )
};

export default AcademicTutors;
