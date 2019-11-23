import React from 'react';
import SectionsAccordion from "./sectionsAccordion";
import BackGround from "../../helpers/backGround";

const Main = () => {
  return (
      <main>
        <section className={"banner-" + BackGround()}>
          <div id="slogan">Welcome, Umoja ni Nguvu Yetu</div>
        </section>
        <div id="tuition">Tuition Jobs</div>
        <div id="lead">Tap section to expand and view content</div>
        <section className="sections">
          <SectionsAccordion/>
        </section>
      </main>
  );
};

export default Main;
