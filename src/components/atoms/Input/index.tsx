import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customClassName?: string;
}

const Input: React.FC<InputProps> = ({ customClassName, ...props }) => {
  return <input className={customClassName} {...props} />;
};

export default Input;
