import './Button.css';

function Button({
  children,
  disabled = false,
  onClick,
  variant = 'primary',
}) {
  return (
    <button
      className="cl-button"
      data-variant={variant}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
