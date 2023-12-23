import { useState } from "react"

const Form = () => {

  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 3000)
}

  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increase</button>
    </div>
  )
}
export default Form