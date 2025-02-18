import OptionPageCard from "@/components/optionPage/OptionPageCard";
import Record from "@/components/optionPage/Record/Record";

const RecordingSettings = () => {
  return (
    <OptionPageCard
      custom
      tabs
      logo
      title='Recording Settings'
      para='Set preferences for screen recording and video capture.'
    >
      <Record />
    </OptionPageCard>
  );
};

export default RecordingSettings;
