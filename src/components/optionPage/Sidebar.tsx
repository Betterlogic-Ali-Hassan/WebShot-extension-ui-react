"use client";
import { SidebarItem } from "./SidebarItem";

import { navItems } from "../../../constant/nav-item";
import SettingLogo from "../svgs/SettingLogo";
import { Link } from "react-router";

export function Sidebar() {
  return (
    <aside className='w-[335px] max-[1400px]:w-[280px] h-screen px-3 pt-2 pb-3 flex flex-col  border-r sticky top-0 bg-card dark:bg-[#222]'>
      <Link
        to='/'
        className='pt-8 px-3 pb-4 mb-4 w-full flex items-center gap-2 font-semibold text-lg'
      >
        <SettingLogo />
        WebShot
      </Link>

      <nav className='flex flex-col '>
        {navItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
