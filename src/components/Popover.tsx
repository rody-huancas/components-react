import React, { useState } from 'react';

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({ trigger, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div onClick={togglePopover} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 p-4 bg-white border border-gray-200 rounded-md shadow-lg ${className}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
