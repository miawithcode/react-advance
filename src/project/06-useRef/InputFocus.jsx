import { useRef, useEffect } from 'react';

const InputFocus = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  })

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" ref={refContainer} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default InputFocus;
