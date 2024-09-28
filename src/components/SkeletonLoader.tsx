import React from "react";
import classNames from "classnames";

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  circle?: boolean;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = "100%",
  height = "20px",
  circle = false,
  className = "",
}) => {
  return (
    <div
      className={classNames(
        "bg-gray-300 animate-pulse",
        circle ? "rounded-full" : "rounded",
        className
      )}
      style={{ width, height }}
    ></div>
  );
};

export default SkeletonLoader;
