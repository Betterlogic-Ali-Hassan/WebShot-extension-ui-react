import Theme from "@/components/svgs/Theme";
import Webcam from "@/components/svgs/Webcam";
import { AiOutlineAudio } from "react-icons/ai";
import { IoVolumeHighOutline } from "react-icons/io5";
export const setting = [
  {
    feature: "Record Mic Sound",
    icon: <AiOutlineAudio size={22} />,
  },
  {
    feature: "Record Tab Sound",
    icon: <IoVolumeHighOutline size={22} />,
  },
  {
    feature: "Record WebCam",
    icon: <Webcam />,
  },
  {
    feature: "Show Drawing Tools",
    icon: <Theme />,
  },
];
