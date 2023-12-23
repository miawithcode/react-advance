import { useState } from "react";
import { peopleName } from "../../data";

const List = () => {
  const [people, setPeople] = useState(peopleName);

  const deletePeople = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  };
  const clearAllPeople = () => {
    setPeople([]);
  };

  return (
    <div>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <li>
              <p>{name}</p>
              <button
                type="button"
                onClick={() => deletePeople(id)}
              >
                delete
              </button>
            </li>
          </div>
        );
      })}

      <button
        type="button"
        onClick={clearAllPeople}
      >
        Clear All
      </button>
    </div>
  );
};
export default List;
