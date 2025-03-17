import React, { useState, useEffect } from 'react';
import './ColorBlock.css';

function ColorBlock() {
  const [color, setColor] = useState('#440b16');

  
  const toggleColor = () => {
    setColor((prevColor) => (prevColor === '#440b16' ? '#ffe69a' : '#440b16'));
  };

  
  useEffect(() => {
    console.log(`Поточний колір: ${color}`);
  }, [color]);

  return (
    <div className="color-block-container">
      <div
        className="color-block"
        style={{ backgroundColor: color }}
      ></div>
      <button className="color-toggle-button" onClick={toggleColor}>
        Змінити колір
      </button>
    </div>
  );
}

export default ColorBlock;
