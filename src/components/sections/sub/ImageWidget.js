import React from "react";

const ImageWidget = (src, alt, title, description) => {
  return (
      <div className="image-widget">
        <div className="image">
          <img src={src} alt={alt}/>
        </div>
        <div className="text">
            <div className="title">
              {title}
            </div>
            <div className="description">
              {description}
            </div>
        </div>
      </div>
  )
};

 export default ImageWidget;
