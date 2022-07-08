import classnames from "classnames";

const Button = ({
  children,
  onClick,
  className = "",
  color,
  disabled = false,
}) => {
  return (
    <button
      className={classnames(
        `${
          color
            ? color + " text-white hover:text-slate-800"
            : `bg-orange-500 hover:bg-orange-300 text-slate-800`
        } px-4 py-4 capitalize text-xs tracking-wider border-2 border-slate-800 transition ease-in-out delay-150 disabled:opacity-50 disabled:pointer-events-none ${className}`
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
