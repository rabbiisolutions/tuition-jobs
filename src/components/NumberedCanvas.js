import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Circle } from 'react-konva';


class NumberedCircle extends React.Component {
  render() {
    // lets think you want to make all your objects visible in
    // 700x700 scene
    const CANVAS_VIRTUAL_WIDTH = 700;
    const CANVAS_VIRTUAL_HEIGHT = 700;

    // now you may want to make it visible even on small screens
    // we can just scale it
    const scale = Math.min(
        window.innerWidth / CANVAS_VIRTUAL_WIDTH,
        window.innerHeight / CANVAS_VIRTUAL_HEIGHT
    );

    return (
        <Stage width={window.innerWidth} height={window.innerHeight} scaleX={scale} scaleY={scale}>
          <Layer>
            <Circle x={200} y={100} radius={50} fill="heliotrope"/>
          </Layer>
        </Stage>
    );
  }
}

export default NumberedCircle;
