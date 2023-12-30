import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/miawithcode';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  return (
    <section>
      <img
        style={({ width: '150px' ,borderRadius: '50%' })}
        src={user.avatar_url}
      ></img>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </section>
  );
};
export default MultipleReturns;
