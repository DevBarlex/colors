import React, { useRef } from 'react';

const BoxColor = ({ color, inputColor }) => {
  const boxRef = useRef(null);
  const isMatch = color.toLowerCase() === inputColor.toLowerCase();

  return (
    <div
      ref={boxRef}
      className="box"
      style={{ borderColor: isMatch ? color : 'white',  backgroundColor: 'transparent', borderWidth: '2px', borderStyle: 'solid' }}
    >
      <h3 style={{ color: isMatch ? color : 'white' }}>
        {isMatch ? `Yes, I'm a ${color} color` : `I'm not a ${inputColor} color`}
      </h3>
    </div>
  );
};

export default BoxColor;