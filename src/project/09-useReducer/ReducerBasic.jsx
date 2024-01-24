import { useReducer, useState } from 'react';
import { peopleName } from '../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
  people: peopleName,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: peopleName };
  }
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.playload.id
    );
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};

const ReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const deletePeople = (id) => {
    dispatch({ type: REMOVE_ITEM, playload: { id } }); // id: id
  };

  const clearAllPeople = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetPeople = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
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

      {!state.people.length ? (
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
