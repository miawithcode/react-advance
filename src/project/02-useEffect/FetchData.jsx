import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <section>
      <h3>GitHub Users</h3>
      <ul>
        {users.map((user) => {
          const { id, login, html_url, avatar_url } = user;
          console.log(user);
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} style={{ width: '100px' }} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
