import classNames from "classnames";

type MenuItemProps = {
  label     : string;
  url       : string;
  className?: string;
  isActive? : boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, url, className, isActive = false }) => {
  return (
    <li>
      <a
        href={url}
        className={classNames(
          "px-4 py-2 block text-sm font-medium hover:text-blue-500 hover:bg-gray-100 rounded-md transition",
          {
            "text-blue-600 font-bold": isActive,
            "text-gray-700": !isActive,
          },
          className
        )}
      >
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
