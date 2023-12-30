import { useState } from "react";

const ToggleComponent = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state && <SayHello />}
    </div>
  );
}

const SayHello = () => {
  return (
    <div>Hello World</div>
  )
}

export default ToggleComponent