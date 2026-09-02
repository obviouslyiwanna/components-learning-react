function Checkbox({
  children,
  checked = false,
  disabled = false,
  value,
  onChange,
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />

      {children}
    </label>
  );
}

export default Checkbox;
