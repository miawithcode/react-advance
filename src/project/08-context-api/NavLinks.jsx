import UserContainer from './UserContainer';

const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
export default NavLinks;
