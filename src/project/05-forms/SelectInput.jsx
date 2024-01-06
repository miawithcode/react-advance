import { useState } from "react";

const frameworks = ['react', 'angular', 'vue', 'svelte'];

const SelectInput = () => {
  const [framework, setFramework] = useState('react');

  return (
    <form>
      <h2>Select Input</h2>
      <div>
      <label htmlFor="framework">Framework</label>
      <select name="framework" id="framework" value={framework} onChange={(e)=>setFramework(e.target.value)}>
      {frameworks.map((framework) => {
        return <option key={framework}>{framework}</option>
      })}
      </select>
      </div>
    </form>
  )
}
export default SelectInput