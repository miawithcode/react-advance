import { useRef } from 'react';

const UncontrolledInput = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            ref={refContainer}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default UncontrolledInput;
