import OptionPageCard from "@/components/optionPage/OptionPageCard";
import ActionMenu from "@/components/optionPage/OptionsSetting/ActionMenu";

const ActionMenuSettings = () => {
  return (
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
  );
};

export default ActionMenuSettings;
