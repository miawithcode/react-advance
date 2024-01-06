import { useState } from 'react';

const CheckboxInput = () => {
  const [shipping, setShipping] = useState(false);

  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };

  return (
    <form>
      <h2>Checkbox Input</h2>
      <div>
        <label htmlFor="shipping" style={{ display: 'inline-block' }}>
          Free Shipping
        </label>
        <input
          type="checkbox"
          id="shipping"
          name="shipping"
          checked={shipping}
          onChange={handleShipping}
        />
      </div>
    </form>
  );
};
export default CheckboxInput;
