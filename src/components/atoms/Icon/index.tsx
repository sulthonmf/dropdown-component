import React from "react";

interface IconProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ icon, onClick }) => (
  <span className="cursor-pointer" onClick={onClick}>
    {icon}
  </span>
);

export default Icon;
