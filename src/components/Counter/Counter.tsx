import { FC, useState } from 'react';

type TypeNumber = number;

export const Counter: FC = () => {
  const [number, setNumber] = useState<TypeNumber>(0);
  return (
    <div>
      <h3>{number}</h3>
      <button
        type='button'
        onClick={() => {
          setNumber(number + 5);
          setNumber((prevNumber) => prevNumber + 1);
          setNumber(42);
        }}
      >
        +3
      </button>
    </div>
  );
};
