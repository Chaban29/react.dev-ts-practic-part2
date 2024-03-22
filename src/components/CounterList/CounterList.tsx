import { FC, useState } from 'react';

type TypeInitialCounters = number[];

let initialCounters: TypeInitialCounters = [0, 0, 0];

export const CounterList: FC = () => {
  const [counters, setCounters] =
    useState<TypeInitialCounters>(initialCounters);

  const handleIncrementClick = (index: number): void => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    console.log(counters);
    setCounters(nextCounters);
  };

  return (
    <div>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => handleIncrementClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
