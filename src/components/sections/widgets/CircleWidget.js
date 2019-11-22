import React from "react";

const CircleWidget = (props) => {
    return (
        <section>
          <div className="sub-title">{props.title}</div>
          <div className="row">
            <span className="step">{props.step}</span>
            <span className="paragraph">{props.paragraph}</span>
          </div>
        </section>
    )
};

export default CircleWidget;
