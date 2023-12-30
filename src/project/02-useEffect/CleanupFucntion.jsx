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
    console.log("Hello from useEffect")
  }, []);

  return <h1>Hello There</h1>
};

export default CleanupFucntion;
