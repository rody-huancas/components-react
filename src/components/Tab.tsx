import { useState } from "react";
import classNames from "classnames";

interface Tab {
  label  : string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={classNames(
              "text-lg py-2 px-4 md:px-6 focus:outline-none transition-all duration-300",
              {
                "border-b-2 border-blue-500 text-blue-500 font-semibold":
                  activeTab === index,
                "text-gray-500 hover:text-blue-500": activeTab !== index,
              }
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4">
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
