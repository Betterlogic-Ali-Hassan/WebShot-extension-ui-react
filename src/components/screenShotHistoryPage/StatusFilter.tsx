import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface DataItem {
  id: number;
  label: string;
}

const data: DataItem[] = [
  { id: 1, label: "All" },
  { id: 2, label: "Listed" },
  { id: 3, label: "On auction" },
  { id: 4, label: "New" },
  { id: 5, label: "Has offers" },
];

const StatusFilter: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<number[]>([1]); // Start with "All" selected

  const handleSelect = (item: DataItem) => {
    if (item.label === "All") {
      setSelected([item.id]); // Select only "All"
    } else {
      let updatedSelected;
      if (selected.includes(item.id)) {
        updatedSelected = selected.filter((id) => id !== item.id);
      } else {
        updatedSelected = [...selected.filter((id) => id !== 1), item.id];
      }

      // If no items are selected, select "All"
      if (updatedSelected.length === 0) {
        setSelected([1]);
      } else {
        setSelected(updatedSelected);
      }
    }
  };

  const isSelected = (id: number) => selected.includes(id);

  return (
    <div className={` ${open ? "pb-1 border-b" : ""}`}>
      <div
        className='flex items-center justify-between cursor-pointer hover:bg-secondary h-12 rounded-[10px]  mb-2 px-3'
        onClick={() => setOpen(!open)}
      >
        <span className='text-[16px] font-semibold'>Status</span>
        <span>
          {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </span>
      </div>
      {open && (
        <div className='flex items-center flex-wrap py-3 px-2.5 gap-3'>
          {data.map((item) => (
            <div
              key={item.id}
              className={cn(
                "py-2 px-3 rounded-xl cursor-pointer font-semibold text-[16px] bg-bg text-dark hover:bg-secondary",
                isSelected(item.id) && "bg-border hover:bg-border"
              )}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
