const Button = ({
  type,
  onClick,
  disabled,
  children,
  className,
  to,
  title,
  fullWidth,
  secondary,
  target,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
