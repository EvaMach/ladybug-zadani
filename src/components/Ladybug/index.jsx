import React from 'react';
import './style.css';

const Ladybug = ({ ladybugState }) => {
  const { orientation, posX, posY } = ladybugState;
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;
