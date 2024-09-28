import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';

type DropdownItem = {
  label  : string;
  onClick: () => void;
};

type DropdownProps = {
  items      : DropdownItem[];
  buttonLabel: string;
  className? : string;
};

export const Dropdown: React.FC<DropdownProps> = ({ items, buttonLabel, className }) => {
  return (
    <div className={classNames('relative inline-block text-left', className)}>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
            {buttonLabel}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={item.onClick}
                    className={classNames(
                      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                      'block px-4 py-2 text-sm w-full text-left'
                    )}
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};
