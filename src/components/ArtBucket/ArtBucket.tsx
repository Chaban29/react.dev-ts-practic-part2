import { FC, useState } from 'react';
import { ItemList } from './ItemList';

export interface IInitiaLList {
  id: number;
  title: string;
  seen: boolean;
}

const initialList: IInitiaLList[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export const ArtBucket: FC = () => {
  const [myList, setMyList] = useState<IInitiaLList[]>(initialList);
  const [yourList, setYourList] = useState<IInitiaLList[]>(initialList);

  const handleToggleMyList = (artworkId: number, nextSeen: boolean): void => {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  };

  const handleToggleYourList = (artworkId: number, nextSeen: boolean): void => {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  };

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
};
