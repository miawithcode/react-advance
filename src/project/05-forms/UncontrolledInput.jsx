import { useState } from "react";

const UncontrolledInput = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // 收集表单中的数据
    const newUser = Object.fromEntries(formData); // formData 中的每个键值对（即表单中的每个字段及其值）被转换成了 newUser 对象的属性。需要处理表单数据作为对象时使用，比如将表单数据发送到服务器，或者在应用中作为对象进行处理。
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
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
        />
      </div>
      {/* email */}
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      {/* password */}
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
export default UncontrolledInput;