function Input({ value = '', onChange }) {
  return (
    <input
      className="cl-input"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
