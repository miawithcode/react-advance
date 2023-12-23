import { useState } from "react"

const Object = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'reading books',
  })

  const displayPerson = () => {
    setPerson({name: 'John', age: 28, hobby: 'playing code'})
    // setPerson({...person, name: 'susan'}); // only modify name
  }

  return (
    <div>
      <h2>
        {person.name}
      </h2>
      <h2>{person.age}</h2>
      <h3>
        Enjoy: {person.hobby}
      </h3>
      <button
        type="button"
        onClick={displayPerson}
      >
        Display John
      </button>
    </div>
  );
}
export default Object