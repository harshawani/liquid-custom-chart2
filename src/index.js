import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

const DemoLiquid = () => {
  const config = {
    percent: 0.25,
    shape(x, y, width, height) {
  const h = height / 2;
  const w = width / 2;
  return [
    ['M', x - x / 3, y - h],
    ['L', x + w, y - y / 3],
    ['L', x + x / 3, y + h],
    ['L', x - w, y + y / 3],
    ['Z'],
  ];
},
    outline: {
      border: 2,
      distance: 4,
      style: {
        stroke: '#FFC100',
        strokeOpacity: 0.65,
      },
    },
    wave: {
      length: 128,
    },
    theme: {
      styleSheet: {
        brandColor: '#FAAD14',
      },
    },
  };
  return <Liquid {...config} />;
};

ReactDOM.render(<DemoLiquid />, document.getElementById('container'));
