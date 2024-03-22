import { FC } from 'react';
import './App.css';
import { DeleteArtist } from './components/DeleteArtist/DeleteArtist';

export const App: FC = () => {
  return (
    <div>
      <DeleteArtist />
    </div>
  );
};
