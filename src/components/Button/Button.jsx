import classnames from "classnames";

const Button = ({children, onClick, className = "", color}) => {
  return (
    <button 
    className={classnames(`${color ? color+' text-white hover:text-slate-800' : `bg-orange-500 hover:bg-orange-300 text-slate-800`} px-4 h-12 capitalize text-xs tracking-wider border-2 border-slate-800   transition ease-in-out delay-150 ${className}`)}
    onClick={onClick}>{children}</button>
  );
};

export default Button;
