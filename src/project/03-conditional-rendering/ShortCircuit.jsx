import { useState } from 'react';

const ShortCircuit = () => {
  // falsy
  const [text, setText] = useState('');
  // Truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({name: 'john'});

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {text && (
        <div>
          <h2>Whatever Return</h2>
          <h4>{name}</h4>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>Whatever Return</h2>
          <h4>{name}</h4>
        </div>
      )} */}

      {user && <SomeComponent name={user.name} />}

    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Component</h2>
      <h4>{name}</h4>
    </div>
  );
}

export default ShortCircuit;
