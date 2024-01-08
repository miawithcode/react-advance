import useToggle from "./useToggle"

const Toggle = () => {
  const {show, toggle} = useToggle(false);
  return (
    <div>
      <h2>Toggle Custom Hooks</h2>
      <button onClick={toggle}>Toggle</button>
      {show && <h4>some stuff</h4>}
    </div>
  );
}
export default Toggle