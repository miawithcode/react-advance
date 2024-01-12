import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({name: 'bob'});

  const logout = () => {
    setUser(null);
  }
  return (
    <nav>
      <h5>Context API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}
export default Navbar