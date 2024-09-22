import React, { useState } from 'react';
import classNames from 'classnames';

type AccordionItem = {
  title  : string;
  content: string;
};

type AccordionProps = {
  items    : AccordionItem[];
  multiple?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ items, multiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (multiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index} className="border border-gray-300 rounded-md">
            <button
              onClick={() => toggleItem(index)}
              className={classNames(
                'w-full flex justify-between items-center px-4 py-2 text-left focus:outline-none',
                {
                  'bg-blue-100': isOpen,
                  'bg-gray-100': !isOpen,
                }
              )}
            >
              <span>{item.title}</span>
              <span>{isOpen ? '-' : '+'}</span>
            </button>

            {isOpen && (
              <div className="px-4 py-2 bg-white">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
