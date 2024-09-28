import React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?     : "success" | "error" | "warning" | "info";
  message   : string;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ type = "info", message, className, ...props }) => {
  const baseStyles = "p-4 rounded-md text-sm flex items-center";

  const typeStyles = {
    success: "bg-green-100 text-green-700",
    error  : "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info   : "bg-blue-100 text-blue-700",
  };

  return (
    <div
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
      {...props}
    >
      {message}
    </div>
  );
};

export default Alert;
