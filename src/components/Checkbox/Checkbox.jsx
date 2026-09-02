import './Checkbox.css';

function Checkbox({
  children,
  checked = false,
  disabled = false,
  value,
  onChange,
}) {
  const showOtherInput = children === '其他' && checked;

  return (
    <div className="cl-checkbox">
      <label className="cl-checkbox__row">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />

        {children}
      </label>

      {showOtherInput ? (
        <input
          className="cl-checkbox__other-input"
          type="text"
          placeholder="请输入其他内容"
        />
      ) : null}
    </div>
  );
}

export default Checkbox;
