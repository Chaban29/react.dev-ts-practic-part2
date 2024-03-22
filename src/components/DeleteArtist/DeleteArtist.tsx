import { FC, useState, useEffect } from 'react';

interface IInitialArtists {
  id: number;
  name: string;
}

let initialArtists: IInitialArtists[] = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export const DeleteArtist: FC = () => {
  const [artists, setArtists] = useState<IInitialArtists[]>(initialArtists);

  useEffect(() => {
    console.log(artists);
  }, [artists]);

  const handleDeleteArtist = (artist: IInitialArtists): void => {
    setArtists(artists.filter((a) => a.id !== artist.id));
  };

  return (
    <div>
      <h1>Inspiring sculptors:</h1>
      {artists.map((artist) => (
        <li key={artist.id}>
          {artist.name}
          <button type='button' onClick={() => handleDeleteArtist(artist)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};
