import { FC, useState } from 'react';

interface IArtists {
  id: number;
  name: string;
}

let nextId: number = 0;

export const AddArtists: FC = () => {
  const [name, setName] = useState<string>('');
  const [artists, setArtists] = useState<IArtists[]>([]);

  const handleAddNewArtist = () => {
    setArtists([{ id: nextId++, name: name }, ...artists]);
    console.log(artists);
  };

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='button' onClick={handleAddNewArtist}>
        Add
      </button>
      <div>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </div>
    </div>
  );
};
