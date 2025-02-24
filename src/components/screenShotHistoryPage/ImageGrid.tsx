"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoListSharp } from "react-icons/io5";
import { RxGrid } from "react-icons/rx";

interface Props {
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
}

const data = [
  { id: 1, icon: <IoListSharp size={24} /> },
  { id: 2, icon: <RxGrid size={24} /> },
];

const ImageGrid = ({ setListView }: Props) => {
  const [selectedItem, setSelectedItem] = useState(data[1].id);

  const handleClick = (id: number) => {
    setSelectedItem(id);
    if (id === 1) {
      setListView(true);
    } else {
      setListView(false);
    }
  };

  return (
    <div className='ml-3 '>
      <div className='p-0.5 bg-secondary h-12 rounded-xl flex items-center gap-3'>
        {data.map((item) => {
          return (
            <span
              key={item.id}
              className={cn(
                "h-11 rounded-xl px-[10px] cursor-pointer hover:bg-card flex items-center justify-center shrink-0 ",
                selectedItem === item.id && "bg-bg hover:bg-bg"
              )}
              onClick={() => handleClick(item.id)}
            >
              {item.icon}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGrid;
