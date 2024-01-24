import { useState } from 'react';
import { peopleName } from '../../data';

const ReducerBasic = () => {
  const [people, setPeople] = useState(peopleName);

  const deletePeople = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllPeople = () => {
    setPeople([]);
  };

  const resetPeople = () => {
    setPeople(peopleName);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <li>
              <p>{name}</p>
              <button type="button" onClick={() => deletePeople(id)}>
                delete
              </button>
            </li>
          </div>
        );
      })}

      {!people.length ? (
        <button onClick={resetPeople}>Reset</button>
      ) : (
        <button type="button" onClick={clearAllPeople}>
          Clear All
        </button>
      )}
    </div>
  );
};
export default ReducerBasic;
