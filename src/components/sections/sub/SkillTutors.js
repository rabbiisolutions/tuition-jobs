import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "./ImageWidget";


const SkillTutors = () => {
  return (
      <section>
        <ImageWidget
            title={descriptions.sports.title}
            description={descriptions.sports.description}
            list={descriptions.sports.list}/>
        <ImageWidget
            title={descriptions.foreign.title}
            description={descriptions.foreign.description}
            list={descriptions.foreign.list}/>
        <ImageWidget
            title={descriptions.hobbies.title}
            description={descriptions.hobbies.description}
            list={descriptions.hobbies.list}/>
      </section>
  )
};

export default SkillTutors;
