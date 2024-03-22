import React, { FC, ChangeEvent } from 'react';
import { useImmer } from 'use-immer';

interface IPerson {
  name: string;
  lastName: string;
  email: string;
  address: {
    city: string;
  };
}

export const Form: FC = () => {
  const [person, setPerson] = useImmer<IPerson>({
    name: 'Roman',
    lastName: 'Chaban',
    email: 'roman.chaban1001@gmail.com',
    address: {
      city: 'Stryi',
    },
  });

  const handleChangeInputsValue = (event: ChangeEvent<HTMLInputElement>) => {
    const draft = event.target;
    setPerson({
      ...person,
      address: {
        ...person.address,
        [draft.name]: draft.value,
      },
      [draft.name]: draft.value,
    });
  };

  return (
    <form
      action='#'
      autoComplete='off'
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <label>
        FirstName:{' '}
        <input
          name='name'
          type='text'
          value={person.name}
          onChange={handleChangeInputsValue}
        />
      </label>
      <label>
        lastName:{' '}
        <input
          name='lastName'
          type='text'
          value={person.lastName}
          onChange={handleChangeInputsValue}
        />
      </label>
      <label>
        Email:{' '}
        <input
          name='email'
          type='email'
          value={person.email}
          onChange={handleChangeInputsValue}
        />
      </label>
      <label>
        <input
          type='text'
          value={person.address?.city}
          name='city'
          onChange={handleChangeInputsValue}
        />
      </label>
      <h3>
        {person.name} {person.lastName} {person.email} {person.address?.city}
      </h3>
    </form>
  );
};
