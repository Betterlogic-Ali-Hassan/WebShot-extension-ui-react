import { actionToolbarData } from "@/constant/action-toolbarData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";
interface Props {
  checkedCount: number;
}
const ActionToolbar = ({ checkedCount }: Props) => {
  return (
    <div
      className={cn(
        "bg-bg flex items-center justify-center gap-2 px-2 focus:outline-none border-border fixed bottom-4 left-1/2 -translate-x-1/2 min-w-[180px]  border   opacity-0 translate-y-[10%] py-2 shadow-md z-40 rounded-full transition-all duration-300",
        checkedCount > 1 && "opacity-100 translate-y-0"
      )}
    >
      {actionToolbarData.map((item, id) => (
        <TooltipProvider delayDuration={0} key={id}>
          <Tooltip>
            <TooltipTrigger className='flex items-center justify-center h-9 w-9 rounded-full hover:bg-secondary'>
              {item.icon}
            </TooltipTrigger>
            <TooltipContent className='bg-black text-white rounded-full'>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger className='flex items-center justify-center h-9 w-9 rounded-full hover:bg-secondary'>
            <Trash size={20} className='!fill-none text-dark' />
          </TooltipTrigger>
          <TooltipContent className='bg-black text-white rounded-full'>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ActionToolbar;
