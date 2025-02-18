import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/optionPage/Sidebar";

const Options = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Options;
