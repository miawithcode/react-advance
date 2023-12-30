import { useEffect, useState } from 'react';

const CleanupFucntion = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle Component</button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("Hello from useEffect");
    const interveId = setInterval(() => {
      console.log("Hello from interval");
    }, 1000); // This will keep running even the component is not display anymore if cleanup function is not set
    return () => {
      clearInterval(interveId); // stop interval when component is not display
    }
  }, []);

  return <h1>Hello There</h1>
};

export default CleanupFucntion;
