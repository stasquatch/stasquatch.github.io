/* eslint-disable react/prop-types */
import React from 'react';

const variance = 25; // in px

const colors = [
  '#d5e6ea', // light blue
  '#022a37', // dark blue
  '#d5a288', // tan
  '#f6ede6', // off-white
  '#77cce3', // richer blue
];

const shapes = [
  'M62.5,-33.4C74.5,-15.4,73.1,13,60.5,33.3C47.8,53.6,23.9,65.8,4.1,63.5C-15.7,61.1,-31.4,44.1,-41.8,25.1C-52.3,6,-57.6,-15.1,-49.7,-30.8C-41.9,-46.5,-20.9,-56.6,2.2,-57.9C25.3,-59.1,50.5,-51.5,62.5,-33.4Z',
  'M48.8,-37.9C60.5,-24.2,65.5,-4,60.7,12.6C55.9,29.2,41.3,42.3,22.8,53.5C4.3,64.8,-18,74.2,-34,67.6C-49.9,61,-59.6,38.4,-61.2,17.9C-62.7,-2.7,-56.2,-21.2,-44.7,-34.8C-33.2,-48.5,-16.6,-57.3,1,-58.1C18.5,-58.8,37,-51.6,48.8,-37.9Z',
  'M57.1,-36.9C66.1,-17.3,60.2,7,48.2,30.5C36.2,54,18.1,76.7,1.1,76.1C-15.8,75.4,-31.7,51.4,-45.9,26.7C-60,1.9,-72.6,-23.6,-64.6,-42.6C-56.7,-61.6,-28.4,-74,-2.2,-72.8C24,-71.5,48,-56.5,57.1,-36.9Z',
  'M45.9,-1.4C45.9,17,23,33.9,0,33.9C-23,33.9,-45.9,17,-45.9,-1.4C-45.9,-19.8,-23,-39.6,0,-39.6C23,-39.6,45.9,-19.8,45.9,-1.4Z',
  'M38.5,-44.7C52.1,-34.5,67,-24.4,71.8,-10.6C76.6,3.2,71.5,20.7,62.8,36.8C54.2,52.8,41.9,67.2,27,71.5C12.1,75.7,-5.6,69.8,-24.8,64.4C-43.9,59,-64.6,54.1,-75.5,40.8C-86.5,27.6,-87.8,5.9,-81.6,-11.9C-75.5,-29.7,-61.9,-43.7,-47.1,-53.7C-32.3,-63.7,-16.1,-69.8,-1.8,-67.6C12.4,-65.4,24.9,-54.9,38.5,-44.7Z',
  'M45.6,-56.3C61.3,-51.4,77.7,-41,78.8,-27.9C79.8,-14.9,65.5,0.9,56.5,15.2C47.5,29.5,43.9,42.5,35.4,51.9C26.8,61.4,13.4,67.4,1.6,65.2C-10.3,63.1,-20.6,52.8,-30,43.6C-39.3,34.4,-47.7,26.3,-55.8,14.9C-63.8,3.6,-71.6,-11.1,-67.4,-21.3C-63.3,-31.5,-47.2,-37.2,-34,-42.9C-20.8,-48.6,-10.4,-54.2,2.3,-57.4C15,-60.5,29.9,-61.2,45.6,-56.3Z',
  'M52.8,-58.8C68.9,-49.4,82.7,-33.2,84.9,-15.7C87.2,1.8,77.8,20.7,65,32.4C52.1,44.1,35.7,48.7,21,51.3C6.2,53.9,-7,54.6,-18.6,50.6C-30.2,46.5,-40.2,37.8,-48.4,26.5C-56.7,15.3,-63,1.5,-61.2,-11.2C-59.4,-23.8,-49.4,-35.4,-37.9,-45.6C-26.3,-55.7,-13.2,-64.3,2.6,-67.4C18.4,-70.5,36.7,-68.1,52.8,-58.8Z',
  'M44,-46.6C54.5,-33.5,58.8,-16.7,56.5,-2.3C54.3,12.2,45.5,24.5,35,35.1C24.5,45.7,12.2,54.6,0.1,54.5C-12,54.4,-24,45.2,-34.4,34.6C-44.8,24,-53.7,12,-55.4,-1.6C-57,-15.3,-51.4,-30.5,-41,-43.7C-30.5,-56.9,-15.3,-68,0.7,-68.7C16.7,-69.4,33.5,-59.8,44,-46.6Z',
  'M55.1,-62C70.3,-52.9,80.7,-34.5,78.5,-18.1C76.3,-1.8,61.4,12.6,51.7,30.2C41.9,47.8,37.3,68.8,25.7,74.8C14.1,80.9,-4.4,72,-20.6,63.3C-36.7,54.5,-50.5,45.8,-58.4,33.2C-66.3,20.6,-68.3,4.1,-66.5,-12.8C-64.8,-29.6,-59.3,-46.9,-47.6,-56.6C-35.8,-66.3,-17.9,-68.6,1,-69.8C19.9,-71,39.9,-71.1,55.1,-62Z',
];

function Blob({ size }) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const num = Math.floor(Math.random() * shapes.length);
  const shape = shapes[num];

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        margin: `${Math.floor(Math.random() * variance) - variance / 2}px`,
      }}
      aria-hidden="true"
      focusable="false"
    >
      <path fill={color} d={shape} transform="translate(100 100)" />
    </svg>
  );
}

export default Blob;
