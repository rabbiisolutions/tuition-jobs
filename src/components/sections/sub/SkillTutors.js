import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "../widgets/ImageWidget";


const SkillTutors = () => {
  return (
      <section id="skill-tutors" className="panel">
        <div className="tag-line">Are teachers of extra-curricular activities. You can earn extra income by teaching your
          talent/skill/specialization to others</div>
        <ImageWidget
            title={descriptions.sports.title}
            description={descriptions.sports.description}
            list={descriptions.sports.list}/>
        <hr/>
        <ImageWidget
            title={descriptions.foreign.title}
            description={descriptions.foreign.description}
            list={descriptions.foreign.list}/>
        <hr/>
        <ImageWidget
            title={descriptions.hobbies.title}
            description={descriptions.hobbies.description}
            list={descriptions.hobbies.list}/>
      </section>
  )
};

export default SkillTutors;
