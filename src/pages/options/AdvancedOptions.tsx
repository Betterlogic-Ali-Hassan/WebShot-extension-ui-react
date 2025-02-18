import OptionPageCard from "@/components/optionPage/OptionPageCard";
import Setting from "@/components/optionPage/Settings/Setting";

const AdvancedOptions = () => {
  return (
    <OptionPageCard
      custom
      tabs
      logo
      title='Advanced Options'
      para='Access additional settings and fine-tune advanced features.'
    >
      <Setting />
    </OptionPageCard>
  );
};

export default AdvancedOptions;
