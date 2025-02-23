import Capture from "@/components/optionPage/capture/Capture";
import OptionPageCard from "@/components/optionPage/OptionPageCard";
import ActionMenu from "@/components/optionPage/OptionsSetting/ActionMenu";
import HotKeys from "@/components/optionPage/OptionsSetting/HotKeys";
import Record from "@/components/optionPage/Record/Record";
import Saving from "@/components/optionPage/Saving/Saving";
import Setting from "@/components/optionPage/Settings/Setting";

export type SidebarContentKey =
  | "Capture Tools"
  | "Recording"
  | "Save Preferences"
  | "Action Menu"
  | "ShortKey"
  | "Advance Settings";

export const sidebarContent: Record<SidebarContentKey, React.ReactNode> = {
  "Capture Tools": (
    <OptionPageCard
      custom
      tabs
      logo
      title='Capture Tools'
      para=' Customize and manage screenshot options for your captures.'
    >
      <Capture />
    </OptionPageCard>
  ),
  Recording: (
    <OptionPageCard
      custom
      tabs
      logo
      title='Recording Settings'
      para='Set preferences for screen recording and video capture.'
    >
      <Record />
    </OptionPageCard>
  ),
  "Save Preferences": (
    <OptionPageCard
      custom
      tabs
      logo
      title='Saving Preferences'
      para='Choose where and how your captures are saved.'
    >
      <Saving />
    </OptionPageCard>
  ),
  "Action Menu": (
    <OptionPageCard
      custom
      tabs
      logo
      title='Action Menu Settings'
      para='Enable or disable tools such as screen capture, video recording,
  and more.'
    >
      <ActionMenu />
    </OptionPageCard>
  ),
  ShortKey: (
    <OptionPageCard
      tabs
      logo
      title='Shortcut Keys'
      para='Set up and manage keyboard shortcuts for faster access.
'
    >
      <HotKeys />
    </OptionPageCard>
  ),
  "Advance Settings": (
    <OptionPageCard
      custom
      tabs
      logo
      title='Advanced Options'
      para='Access additional settings and fine-tune advanced features.'
    >
      <Setting />
    </OptionPageCard>
  ),
};
