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
    // ===== setInterval Example =====
    // console.log("Hello from useEffect");
    // const interveId = setInterval(() => {
    //   console.log("Hello from interval");
    // }, 1000);
    // return () => {
    //   clearInterval(interveId);
    // }

    // ===== event Listener Example =====
    const someFunc = () => {
      // some logic
    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);

  return <h1>Hello There</h1>
};

export default CleanupFucntion;
