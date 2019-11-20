import React from "react";
import sectionCollapseHandler from "../events/collapse";
import Icon from "./icon";
import downIcon from "../icons/down.svg";
import upIcon from "../icons/up.svg";

const panel = (data) => {
  return (
      <div className="panel">
        {data}
      </div>
  )
};

const toggle = (title) => {
  return (
      <div className="section-toggle" onClick={e => sectionCollapseHandler(e)}>
        <span className="section-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.5} width={1.5} className="up hidden"/>
      </div>);
};

const mobileAccordion = {panel: panel, toggle: toggle};

export default mobileAccordion;
