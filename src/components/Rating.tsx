import React, { useState } from "react";

interface RatingProps {
  maxRating?     : number;
  initialRating? : number;
  onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ maxRating = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: maxRating }, (_, index) => {
        const starIndex = index + 1;
        return (
          <svg
            key={starIndex}
            className={`w-8 h-8 cursor-pointer ${
              (hoverRating || rating) >= starIndex
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          >
            <path d="M9.049 2.927a.75.75 0 011.414 0l1.672 3.387 3.74.544a.75.75 0 01.416 1.279l-2.707 2.64.639 3.725a.75.75 0 01-1.088.791L10 13.347l-3.345 1.758a.75.75 0 01-1.088-.79l.638-3.726-2.706-2.64a.75.75 0 01.416-1.279l3.74-.544L9.05 2.927z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
