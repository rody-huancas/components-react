import { useState } from 'react';
import classNames from 'classnames';

type SidebarItem = {
  label: string;
  href : string;
};

type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <aside
        className={classNames(
          'bg-gray-800 text-white w-64 space-y-6 py-7 px-2 hidden md:block'
        )}
      >
        <div className="text-white text-2xl font-semibold text-center">
          Sidebar
        </div>
        <nav>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="md:hidden flex flex-col">
        <button
          onClick={toggleSidebar}
          className="text-white bg-gray-800 px-4 py-2 focus:outline-none"
        >
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        <aside
          className={classNames(
            'bg-gray-800 text-white w-64 space-y-6 py-7 px-2 transition-transform transform',
            { '-translate-x-full': !isOpen, 'translate-x-0': isOpen }
          )}
        >
          <nav>
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      <div className="flex-1 p-10 text-2xl font-bold">
        <p>Main Content Goes Here</p>
      </div>
    </div>
  );
};

export default Sidebar;
