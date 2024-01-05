import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <h4>Controlled Inputs</h4>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ControlledInputs;
