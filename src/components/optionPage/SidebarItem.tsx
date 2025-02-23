"use client";

import { cn } from "@/lib/utils";
import { SidebarContentKey } from "../../constant/sidebar-content";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: SidebarContentKey;
  selectedItem: SidebarContentKey;
  setSelectedItem: (item: SidebarContentKey) => void;
}

export function SidebarItem({
  icon: Icon,
  label,
  selectedItem,
  setSelectedItem,
}: SidebarItemProps) {
  return (
    <div
      onClick={() => setSelectedItem(label)}
      className={cn(
        "flex items-center gap-4 my-1 p-3 rounded-lg transition-colors relative hover:bg-secondary cursor-pointer",
        selectedItem === label && "font-bold bg-secondary"
      )}
    >
      {Icon}
      <span className='text-base'>{label}</span>
    </div>
  );
}
