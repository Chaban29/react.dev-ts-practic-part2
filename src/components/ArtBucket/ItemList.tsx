import { FC } from 'react';
import { IInitiaLList } from './ArtBucket';

interface IItemList {
  artworks: IInitiaLList[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}

export const ItemList: FC<IItemList> = ({ artworks, onToggle }: IItemList) => {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type='checkbox'
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
};
