import OptionPageCard from "@/components/optionPage/OptionPageCard";
import HotKeys from "@/components/optionPage/OptionsSetting/HotKeys";

const ShortKey = () => {
  return (
    <OptionPageCard
      tabs
      logo
      title='Shortcut Keys'
      para='Set up and manage keyboard shortcuts for faster access.
'
    >
      <HotKeys />
    </OptionPageCard>
  );
};

export default ShortKey;
