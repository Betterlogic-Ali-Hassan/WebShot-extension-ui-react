import {
  sidebarContent,
  SidebarContentKey,
} from "../../constant/sidebar-content";
interface OptionContentProps {
  selectedItem: SidebarContentKey;
}
const OptionContent = ({ selectedItem }: OptionContentProps) => {
  return <>{sidebarContent[selectedItem]}</>;
};

export default OptionContent;
