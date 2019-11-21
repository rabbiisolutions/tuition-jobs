import React from "react";
import Circle1 from "../../NumberedCanvas";

const CanvasWidget = (props) => {
    return (
        <section>
          <div className="sub-title">{props.title}</div>
          <div className="row">
            
            <div>{props.paragraph}</div>
          </div>
        </section>
    )
};

export default CanvasWidget;
