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

  const handleDelete = (id) => {
    const newUsers = users.filter((person) => person.id !== id);
    setUsers(newUsers);
  }

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
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <button type='button' onClick={() => handleDelete(user.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AddUser;
