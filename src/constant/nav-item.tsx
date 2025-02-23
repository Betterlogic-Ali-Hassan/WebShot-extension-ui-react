import ActionMenu from "@/components/svgs/ActionMenu";
import AdvSetting from "@/components/svgs/AdvSetting";
import CaptureTool from "@/components/svgs/CaptureTool";
import Recording from "@/components/svgs/Recording";

import SaveTool from "@/components/svgs/SaveTool";
import ShortKey from "@/components/svgs/ShortKey";
import { SidebarContentKey } from "./sidebar-content";

export const navItems = [
  {
    icon: <CaptureTool />,
    label: "Capture Tools" as SidebarContentKey,
  },
  { icon: <Recording />, label: "Recording" as SidebarContentKey },
  { icon: <SaveTool />, label: "Save Preferences" as SidebarContentKey },
  { icon: <ActionMenu />, label: "Action Menu" as SidebarContentKey },
  { icon: <ShortKey />, label: "ShortKey" as SidebarContentKey },
  {
    icon: <AdvSetting />,
    label: "Advance Settings" as SidebarContentKey,
  },
];
