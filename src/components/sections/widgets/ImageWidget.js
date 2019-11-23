import React from "react";
import ListItem from "../../listItems";


const ImageWidget = (props) => {
  return (
      <div className="image-widget">
        { props.src ? // add image if src is passed
          <div className="image">
            <img src={props.src} alt={props.alt} height="160"/>
          </div>
            : ''
        }
        <div className="text">
            <div className="title">
              {props.title}
            </div>
            <div className="description">
              {props.description}
            </div>
            { props.list ? // append list if only list is passed
              <div className="list">
                {ListItem(props.list)}
              </div>
                : ''
            }
        </div>
      </div>
  )
};

 export default ImageWidget;
