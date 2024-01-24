import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { peopleName } from '../../data';


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

export default reducer;