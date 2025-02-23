import Area from "@/components/svgs/Area";
import Computer from "@/components/svgs/Computer";
import Desktop from "@/components/svgs/Desktop";
import Tab from "@/components/svgs/Tab";
import Visible from "@/components/svgs/Visible";
import Webcam from "@/components/svgs/Webcam";

export const smallCard = [
  {
    id: 1,
    icon: <Visible />,
    name: "Visible Part",
    key: "Ctrl + Shift + D",
  },
  {
    id: 2,
    icon: <Computer />,
    name: "Entire Page",
    key: "Ctrl + Shift + P",
  },
  {
    id: 3,
    icon: <Area />,
    name: "Selected Area",
    key: "Ctrl + Shift + S",
  },
  {
    id: 4,
    icon: <Desktop />,
    name: "Desktop",
    key: "Ctrl + Shift + L",
  },
  {
    id: 5,
    icon: <Tab />,
    name: "This Tab",
    key: "Ctrl + Shift + T",
  },
  {
    id: 6,
    icon: <Webcam />,
    name: "Webcam",
    key: "Ctrl + Shift + W",
  },
];
