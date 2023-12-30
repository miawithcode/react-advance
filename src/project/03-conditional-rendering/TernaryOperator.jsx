import { useState } from 'react';

const TernaryOperator = () => {
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <button>{isEditing ? 'edit' : 'add'}</button>

      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}

    </div>
  );
};

export default TernaryOperator;
