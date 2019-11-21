import React from "react";

const CanvasWidget = (props) => {
    return (
        <section>
          <div className="sub-title">{props.title}</div>
          <div className="row">
            <span>{props.step}</span>
            <span>{props.paragraph}</span>
          </div>
        </section>
    )
};

export default CanvasWidget;
