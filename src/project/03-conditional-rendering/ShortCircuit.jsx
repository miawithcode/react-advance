import { useState } from 'react';

const ShortCircuit = () => {
  // falsy
  const [text, setText] = useState('');
  // Truthy
  const [name, setName] = useState('susan');

  const codeExample = text || 'Hello World';

  return (
    <div>
      <h4>Falsy OR : {text || 'Hello World'}</h4>
      <h4>Falsy AND : {text && 'Hello World'}</h4>
      <h4>Truthy OR : {name || 'Hello World'}</h4>
      <h4>Truthy AND : {name && 'Hello World'}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuit;
