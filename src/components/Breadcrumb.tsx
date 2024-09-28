import cn from "classnames";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items     : BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={cn("flex items-center text-sm text-gray-600", className)} aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <a
              href={item.href}
              className={cn("hover:text-blue-500 transition-colors", {
                "text-gray-400": index === items.length - 1,
                "text-blue-500": index !== items.length - 1,
              })}
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ArrowRightIcon className="mx-2 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
