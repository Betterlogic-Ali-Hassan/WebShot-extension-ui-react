"use client";

import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-4 my-1 p-3 rounded-lg transition-colors relative hover:bg-secondary",
        isActive && "font-bold bg-secondary"
      )}
    >
      {Icon}
      <span className='text-base'>{label}</span>
    </Link>
  );
}
