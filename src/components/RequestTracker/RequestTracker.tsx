import { FC, useState } from 'react';

type TypePending = number;
type TypeCompleted = number;

export const RequestTracker: FC = () => {
  const [pending, setPending] = useState<TypePending>(0);
  const [completed, setCompleted] = useState<TypeCompleted>(0);

  const handleClick = async () => {
    setPending((prevPending) => prevPending + 1);
    await delay(3000);
    setPending((prevPending) => prevPending - 1);
    setCompleted((prevCompleted) => prevCompleted + 1);
  };

  return (
    <div>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button type='button' onClick={handleClick}>
        Buy
      </button>
    </div>
  );
};

const delay = (ms: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
