import { useState } from 'react';
import { peopleName } from '../../data';

const AddUser = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(peopleName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = {
      id: fakeId,
      name: name,
    };
    // const newUser = {id: fakeId, name};

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <h4>Users</h4>
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </div>
  );
};
export default AddUser;
