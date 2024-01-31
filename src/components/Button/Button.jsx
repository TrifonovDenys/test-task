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
  style
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
