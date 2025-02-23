import OptionContent from "@/components/optionPage/OptionContent";
import { Sidebar } from "@/components/optionPage/Sidebar";
import { navItems } from "@/constant/nav-item";
import { SidebarContentKey } from "@/constant/sidebar-content";

import { useState } from "react";

const Options = () => {
  const [selectedItem, setSelectedItem] = useState<SidebarContentKey>(
    navItems[0].label
  );
  return (
    <div className='flex'>
      <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <div className='content'>
        <OptionContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Options;
