import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Circle } from 'react-konva';


class NumberedCircle extends React.Component {
  render() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Circle x={47} y={50} radius={37} fill="heliotrope"/>
          </Layer>
        </Stage>
    );
  }
}

export default NumberedCircle;
