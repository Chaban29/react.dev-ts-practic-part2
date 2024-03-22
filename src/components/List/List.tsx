import { FC, useState } from 'react';

type typeName = string;

type TypeButtonDisabled = boolean;
interface IInitiaLArtists {
  id: number;
  name: string;
}

const initialArtists: IInitiaLArtists[] = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export const List: FC = () => {
  let nextId = 3;
  const [name, setName] = useState<typeName>('');
  const [artists, setArtists] = useState<IInitiaLArtists[]>(initialArtists);
  const [disabled, isSetDisabled] = useState<TypeButtonDisabled>(false);

  const handleClick = () => {
    const insertAt: number = 1;
    if (name === '') {
      isSetDisabled(!disabled);
    } else {
      const nextArtists = [
        ...artists.slice(0, insertAt),
        { id: nextId, name: name },
        ...artists.slice(insertAt),
      ];
      setArtists(nextArtists);
    }
    setName('');
  };

  const handleFocus = () => {
    isSetDisabled(false);
  };

  const handleBlur = () => {
    isSetDisabled(disabled);
  };

  const handleReversedList = () => {
    const reversedList = [...artists];
    reversedList.reverse();
    setArtists(reversedList);
  };

  const handleSortedList = () => {
    const sortedList = [...artists];
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
    setArtists(sortedList);
  };
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={disabled} onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.name}>{artist.name}</li>
        ))}
      </ul>
      <button onClick={handleReversedList}>Reverse</button>
      <button onClick={handleSortedList}>Sort by Alphabet</button>
    </>
  );
};
