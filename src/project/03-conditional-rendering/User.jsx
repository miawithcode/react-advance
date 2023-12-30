import {useState} from 'react';

const User = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({name: 'John'});
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
          <button type="button" onClick={logout}>Logout</button>
        </div>
        ) : (
          <div>
            <h4>Please login</h4>
            <button type="button" onClick={login}>Login</button>
          </div>
        )
      }
    </div>
  )
}
export default User