import OptionPageCard from "@/components/optionPage/OptionPageCard";
import Saving from "@/components/optionPage/Saving/Saving";

const SavingPreferences = () => {
  return (
    <OptionPageCard
      custom
      tabs
      logo
      title='Saving Preferences'
      para='Choose where and how your captures are saved.'
    >
      <Saving />
    </OptionPageCard>
  );
};

export default SavingPreferences;
