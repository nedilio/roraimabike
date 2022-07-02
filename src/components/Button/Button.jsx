import React from "react";

const Button = ({children, onClick}) => {
  return (
    <button 
    className="px-4 h-12 uppercase tracking-wider border-2 border-slate-800 bg-orange-400 text-slate-800 transition ease-in-out delay-150 hover:bg-orange-300"
    onClick={onClick}>{children}</button>
  );
};

export default Button;
