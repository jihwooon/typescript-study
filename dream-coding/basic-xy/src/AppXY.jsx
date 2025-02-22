import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    // 모든 방향으로 포인터가 이동아 기능하다면?
    setPosition({x: event.x, y: event.clientY})
    // 수평으로 이동이 가능하다면?
    // setPosition(prev => ({x: event.clientX, y: prev.y}))
    // 수직만 이동이 가능하다면?
    setPosition(prev => ({x: prev.x, y: event.clientY}))
  };

  return (
    <div className="container" onPointerMove={handlePointerMove}>
      <div
        className="pointer"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}
