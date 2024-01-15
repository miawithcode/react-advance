import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {

  const {user, logout} = useContext(NavbarContext);

  return (
    <div>
      {user ? (
        <>
          <p>Hello, {user?.name?.toUpperCase()}</p>
          <button onClick={logout}>logout</button>
        </>
      ) : (
          <button>login</button>
      )}
    </div>
  );
};
export default UserContainer;
