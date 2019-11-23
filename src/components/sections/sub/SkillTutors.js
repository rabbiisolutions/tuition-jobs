import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "../widgets/ImageWidget";
import texts from "../../../constants/texts";
import sportsWebp from "../../../images/webp/sports.webp";
import sportsJpeg from "../../../images/jpeg/sports.jpg";
import foreignWebp from "../../../images/webp/foreign.webp";
import foreignJpeg from "../../../images/jpeg/foreign.jpg";
import hobbiesWebp from "../../../images/webp/hobbies.webp";
import hobbiesJpeg from "../../../images/jpeg/hobbies.jpg";
import webpIsSupported from "../../../helpers/webp";



const SkillTutors = () => {
  return (
      <section id="skill-tutors" className="panel">
        <div className="xtion-title">
          <span className="text">{texts.skillTutors}</span>
        </div>
        <div className="tag-line">Are teachers of extra-curricular activities. You can earn extra income by teaching your
          talent/skill/specialization to others</div>
        <section className="content">
          <ImageWidget
              src={webpIsSupported() ? sportsWebp : sportsJpeg}
              title={descriptions.sports.title}
              description={descriptions.sports.description}
              list={descriptions.sports.list}/>
          <ImageWidget
              src={webpIsSupported() ? foreignWebp : foreignJpeg}
              title={descriptions.foreign.title}
              description={descriptions.foreign.description}
              list={descriptions.foreign.list}/>
          <ImageWidget
              src={webpIsSupported() ? hobbiesWebp : hobbiesJpeg}
              title={descriptions.hobbies.title}
              description={descriptions.hobbies.description}
              list={descriptions.hobbies.list}/>
        </section>
      </section>
  )
};

export default SkillTutors;
