import { FC, Fragment, useState } from 'react';

interface IArtists {
  id: number;
  name: string;
}

export const FilteredAndDeleteItem: FC = () => {
  const [name, setName] = useState<string>('');
  const [artists, setArtists] = useState<IArtists[]>([]);

  let nextId = 0;

  const handleAddArtist = () => {
    setArtists([...artists, { id: nextId++, name: name }]);
    setName('');
  };

  const handleDeleteArtist = (artist: IArtists): void => {
    setArtists(artists.filter((a) => a.id !== artist.id));
  };
  return (
    <div>
      <h1>Inspiring Sculptures:</h1>
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type='button' onClick={handleAddArtist}>
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <Fragment key={artist.id}>
            <li>
              {artist.name}
              <button
                style={{ marginLeft: 20 }}
                type='button'
                onClick={() => handleDeleteArtist(artist)}
              >
                Delete
              </button>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
