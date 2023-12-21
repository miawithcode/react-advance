import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="text-6xl">
        You clicked <span className=" text-blue-500 ">{count}</span> times
      </h2>
      <button
        type="button"
        className=" cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:translate-y-[-3px] hover:bg-blue-600 "
        onClick={handleClick}
      >
        Increase
      </button>
    </div>
  );
};
export default Counter;
