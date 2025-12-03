import React from "react";

function BouncingBalls() {
  return (
    <div className='relative flex gap-1.5 '>
      <Ball style={{ "--distance": "2px", "--duration": "200ms" }} />
      <Ball style={{ "--distance": "4px", "--duration": "300ms" }} />
      <Ball style={{ "--distance": "6px", "--duration": "400ms" }} />
    </div>
  );
}

function Ball({ style }) {
  return (
    <div
      style={style}
      className='rounded-full size-1.5 bg-white animate-bounce-custom'
    />
  );
}

export default BouncingBalls;
