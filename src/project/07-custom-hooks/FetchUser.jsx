import useFetchUser from "./useFetchUser";

const url = 'https://api.github.com/users/miawithcode';

const FetchUser = () => {
  const {isLoading, isError, user} = useFetchUser(url);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  const { avatar_url, name, bio } = user;

  return (
    <section>
      <img
        style={{ width: '150px', borderRadius: '50%' }}
        src={avatar_url}
      ></img>
      <h3>{name}</h3>
      <p>Bio: {bio}</p>
    </section>
  );
}
export default FetchUser