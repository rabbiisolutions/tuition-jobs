import React from "react";
import descriptions from "../../../constants/Descriptions";
import ImageWidget from "../widgets/ImageWidget";
import texts from "../../../constants/texts";
import primaryWebp from "../../../images/webp/primary_school.webp";
import primaryJpeg from "../../../images/jpeg/primary_school.jpg";
import highWebp from "../../../images/webp/high_school.webp";
import highJpeg from "../../../images/jpeg/high_school.jpg";
import internationalWebp from "../../../images/webp/international.webp";
import internationalJpeg from "../../../images/jpeg/international.jpg";
import webpIsSupported from "../../../helpers/webp";


const AcademicTutors = () => {
  return (
      <section id="academic-tutors" className="panel">
        <div className="xtion-title">
          <span className="text">{texts.academicTutors}</span>
        </div>
        <div className="tag-line">These are trained teachers who help students revise difficult topics in their academic work</div>
        <section className="content">
          <ImageWidget
              src={webpIsSupported() ? primaryWebp : primaryJpeg}
              title={descriptions.primary.title}
              description={descriptions.primary.description}/>
          <ImageWidget
              src={webpIsSupported() ? highWebp : highJpeg}
              title={descriptions.high.title}
              description={descriptions.high.description}/>
          <ImageWidget
              src={webpIsSupported() ? internationalWebp : internationalJpeg}
              title={descriptions.international.title}
              description={descriptions.international.description}
              list={descriptions.international.list}/>
        </section>
      </section>
  )
};

export default AcademicTutors;
