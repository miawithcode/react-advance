const ControlledInputs = () => {
  return (
    <form>
      <h4>Controlled Inputs</h4>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlledInputs