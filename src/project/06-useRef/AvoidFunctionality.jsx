import { useEffect, useRef, useState } from "react";


const AvoidFunctionality = () => {
  const [value, setValue] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('re-render');
  }, [value])

  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>
        increase
      </button>
    </div>
  );
};
export default AvoidFunctionality;
