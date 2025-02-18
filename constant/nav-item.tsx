import ActionMenu from "@/components/svgs/ActionMenu";
import AdvSetting from "@/components/svgs/AdvSetting";
import CaptureTool from "@/components/svgs/CaptureTool";
import Recording from "@/components/svgs/Recording";

import SaveTool from "@/components/svgs/SaveTool";
import ShortKey from "@/components/svgs/ShortKey";

export const navItems = [
  {
    icon: <CaptureTool />,
    label: "Capture Tools",
    href: "/options/capture",
  },
  { icon: <Recording />, label: "Recording", href: "/options/recording" },
  { icon: <SaveTool />, label: "Save Preferences", href: "/options/save" },
  { icon: <ActionMenu />, label: "Action Menu", href: "/options/action" },
  { icon: <ShortKey />, label: "ShortKey", href: "/options/short-key" },
  {
    icon: <AdvSetting />,
    label: "Advance Settings",
    href: "/options/adv",
  },
];
