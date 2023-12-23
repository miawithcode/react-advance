import { useState } from "react"

const Form = () => {

  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => {
    const newState = prevState + 1;
    return newState;
    });
}

  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increase</button>
    </div>
  )
}
export default Form