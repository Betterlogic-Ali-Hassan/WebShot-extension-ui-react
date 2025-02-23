import SwitchToggle from "@/components/SwitchToogle";

import SettingManage from "./settingManagement/SettingManage";
import { settings } from "@/constant/screenShotSettingData";

const Setting = () => {
  return (
    <>
      <SwitchToggle
        title="Turn on dark mode for the extension's popup menu"
        para='Switch to dark mode for a more comfortable experience in low-light settings.
'
      />
      {settings.slice(6).map((option, id) => (
        <SwitchToggle key={id} title={option.name} para={option.des} checked />
      ))}
      <SettingManage />
    </>
  );
};

export default Setting;
