import React from "react";

interface LabelProps {
  text: string;
  classNames?: string;
}

const Label: React.FC<LabelProps> = ({ text, classNames }) => (
  <label
    className={["text-sm font-medium min-w-[100px]", classNames].join(" ")}
  >
    {text}
  </label>
);

export default Label;
