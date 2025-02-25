import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { LucideMoreHorizontal } from "lucide-react";
import { MdContentCopy, MdEdit } from "react-icons/md";
import { IoMdArrowDown, IoMdShare } from "react-icons/io";
import { cn } from "@/lib/utils";

const Menu = ({ className }: { className?: string }) => {
  const handleStopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "rounded-full h-9 w-9 flex items-center justify-center bg-secondary hover:bg-bg border-none shrink-0",
            className
          )}
        >
          <span>
            <LucideMoreHorizontal size={18} />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-bg'>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleStopPropagation}
        >
          <MdEdit size={18} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleStopPropagation}
        >
          <IoMdShare size={18} />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleStopPropagation}
        >
          <IoMdArrowDown size={18} />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleStopPropagation}
        >
          <MdContentCopy size={18} />
          Copy
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
