import Capture from "@/components/optionPage/capture/Capture";
import OptionPageCard from "@/components/optionPage/OptionPageCard";

const CaptureTools = () => {
  return (
    <OptionPageCard
      custom
      tabs
      logo
      title='Capture Tools'
      para=' Customize and manage screenshot options for your captures.'
    >
      <Capture />
    </OptionPageCard>
  );
};

export default CaptureTools;
