import { useReducer, useState } from 'react';
import { peopleName } from '../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people: peopleName,
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
