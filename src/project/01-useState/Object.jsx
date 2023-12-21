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
    <div className="flex flex-col items-center gap-6">
      <h2 className=" text-4xl font-bold capitalize tracking-wider ">
        {person.name}
      </h2>
      <h2 className=" text-xl text-slate-500 ">{person.age}</h2>
      <h3 className=" text-2xl capitalize tracking-wide ">
        Enjoy: {person.hobby}
      </h3>
      <hr className=" w-full bg-slate-600 " />
      <button
        type="button"
        onClick={displayPerson}
        className=" captalize rounded-md bg-orange-400 px-4 py-2 text-xl font-semibold tracking-wider transition duration-200 hover:bg-orange-500 "
      >
        Display John
      </button>
    </div>
  );
}
export default Object