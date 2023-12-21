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
    <div className="flex flex-col items-center p-5">
      <div className="mb-6 flex w-full justify-between">
        <input
          type="text"
          placeholder="Add people"
          className="w-full rounded-md border p-2"
        />
        <button type="button" className=" bg-amber-300 ml-4 px-5 py-1 rounded-md font-semibold text-sm">
          Add
        </button>
      </div>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <li className="flex w-80 cursor-pointer justify-between rounded-lg py-2 transition duration-200">
              <p>{name}</p>
              <button
                type="button"
                onClick={() => deletePeople(id)}
                className=" rounded-[4px] bg-rose-500 px-3 py-1 text-white transition duration-200 hover:bg-rose-600 "
              >
                delete
              </button>
            </li>
            <hr className="w-full border-t-[1px] border-slate-100" />
          </div>
        );
      })}

      <button
        type="button"
        onClick={clearAllPeople}
        className=" mt-6 w-full rounded-md bg-sky-500 px-3 py-2 font-semibold capitalize tracking-wider text-white transition duration-200 hover:bg-sky-600 "
      >
        Clear All
      </button>
    </div>
  );
};
export default List;
