const UserContainer = ({ user, logout }) => {
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
