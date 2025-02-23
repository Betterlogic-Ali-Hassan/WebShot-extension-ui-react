import ProgressBar from "./ProgressBar";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setScreenShot: Dispatch<SetStateAction<boolean>>;
}
const UploadingBox = ({ setScreenShot }: Props) => {
  return (
    <div className='px-6'>
      <h2 className='text-sm font-semibold text-left mt-1'>Image Uploading</h2>
      <ProgressBar />
      <p className='text-left text-xs font-medium'>
        Please do not scroll or move your mouse pointer while capturing in order
        to get the best result.
        <br />
        <br />
        For very long pages or infinite scroll pages, you can end the capturing
        manually by clicking &nbsp;
        <span
          className='underline cursor-pointer'
          onClick={() => setScreenShot(false)}
        >
          Stop.
        </span>
      </p>
    </div>
  );
};

export default UploadingBox;
