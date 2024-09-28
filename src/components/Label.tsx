import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text      : string;
  htmlFor?  : string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, className, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    >
      {text}
    </label>
  );
};

export default Label;
