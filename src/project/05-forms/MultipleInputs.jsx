import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '', email: '', password: '',
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user.name || !user.email || !user.password) return; 
    console.log(user);
    setUser({...user, name: '', email: '', password: ''});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Multiple Inputs</h4>
      {/* name */}
      <div>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      {/* email */}
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default MultipleInputs;
