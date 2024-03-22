import { FC } from 'react';

interface IButton {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: FC<IButton> = ({ children, onClick }: IButton) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export const OtherComponent: FC = () => {
  return (
    <div onClick={() => alert('Parent')}>
      <Button onClick={() => alert('first button')}>click</Button>
      <Button onClick={() => alert('second button')}>click {1 + 1}</Button>
    </div>
  );
};
