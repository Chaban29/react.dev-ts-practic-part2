import { FC, useState } from 'react';

interface ICoordinates {
  x: number;
  y: number;
}

export const MovingDot: FC = () => {
  const [coordinates, setCoordinates] = useState<ICoordinates>({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(event) => {
        setCoordinates((prevCoordinates) => ({
          ...prevCoordinates,
          x: event.clientX,
          y: event.clientY,
        }));
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
};
