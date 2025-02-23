"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
const tabs = [
  {
    id: 1,
    tab: "Items",
  },
  {
    id: 2,
    tab: "Offers",
  },
  {
    id: 3,
    tab: "Analytics",
  },
  {
    id: 4,
    tab: "Activity",
  },
];
const ImagesTabs = () => {
  const [selectedItem, setSelectedItem] = useState(tabs[0].id);

  const handleClick = (id: number) => {
    setSelectedItem(id);
  };
  return (
    <div>
      <div className='flex items-center mt-6 px-4'>
        {tabs.map((tab) => (
          <button
            onClick={() => handleClick(tab.id)}
            key={tab.id}
            className={cn(
              "font-semibold py-3 px-6 text-[16px] rounded-[10px]  text-border hover:text-dark",
              selectedItem === tab.id && "bg-dark text-light hover:text-light"
            )}
          >
            {tab.tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagesTabs;
