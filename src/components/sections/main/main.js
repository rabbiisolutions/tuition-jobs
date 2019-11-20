import React from 'react';
import SectionsAccordion from "./sectionsAccordion";

const Main = () => {
  return (
      <main>
        <section id="banner">
          <div id="slogan">Welcome, Umoja ni Nguvu Yetu</div>
        </section>
        <div id="tuition">Tuition Jobs</div>
        <div id="lead">Tap section to expand and view content</div>
        <SectionsAccordion/>
      </main>
  );
};

export default Main;
