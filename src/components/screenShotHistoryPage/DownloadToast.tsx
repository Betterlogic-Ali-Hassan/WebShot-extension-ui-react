import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ToastClose } from "../ui/toast";
interface Props {
  fileName: string;
  setShouldDownload: (shouldDownload: boolean) => void;
}
const DownloadToast = ({ fileName, setShouldDownload }: Props) => {
  const [progressComplete, setProgressComplete] = useState(false);
  const handleProgressComplete = () => {
    setProgressComplete(true);
  };
  return (
    <>
      <div className='relative w-full py-6 px-4 group'>
        <h2 className='font-semibold flex gap-2 text-[15px] items-center'>
          <IoIosCheckmarkCircle size={18} />
          {!progressComplete
            ? ` Preparing ${fileName} file... Please wait.`
            : "Done"}
        </h2>
        <ToastClose onClick={() => setShouldDownload(false)} />
      </div>
      <ProgressBar text onProgressComplete={handleProgressComplete} />
    </>
  );
};

export default DownloadToast;
