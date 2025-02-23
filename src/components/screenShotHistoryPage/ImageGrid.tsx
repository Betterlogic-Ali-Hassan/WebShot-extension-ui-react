"use client";
import React, { useState } from "react";
import { BsGrid1X2 } from "react-icons/bs";
import { IoListSharp } from "react-icons/io5";
import { MdOutlineGridOn } from "react-icons/md";
import { RxGrid } from "react-icons/rx";

interface Props {
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
}

const data = [
  { id: 1, icon: <IoListSharp size={24} /> },
  { id: 2, icon: <MdOutlineGridOn size={24} /> },
  { id: 3, icon: <RxGrid size={24} /> },
  { id: 4, icon: <BsGrid1X2 size={22} /> },
];

const ImageGrid = ({ setListView }: Props) => {
  const [selectedItem, setSelectedItem] = useState(data[2].id);

  const handleClick = (id: number) => {
    setSelectedItem(id);
    if (id === 1) {
      setListView(true);
    } else {
      setListView(false);
    }
  };

  return (
    <div className='ml-3 max-sm:hidden'>
      <div className='p-0.5 bg-[#f5f5f5] h-12 rounded-xl flex items-center gap-3'>
        {data.map((item) => {
          return (
            <span
              key={item.id}
              className={`h-11 rounded-xl px-[10px] cursor-pointer flex items-center justify-center shrink-0  ${
                selectedItem === item.id ? "bg-white" : ""
              }`}
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
