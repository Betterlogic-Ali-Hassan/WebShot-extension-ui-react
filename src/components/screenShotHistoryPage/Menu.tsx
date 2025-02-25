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
import { useToast } from "@/hooks/use-toast";
import CopyToast from "./CopyToast";

import ShareToast from "./ShareLink";
interface Props {
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
  className?: string;
  title: string;
  url: string;
}
const Menu = ({ className, title, url, handleDownload }: Props) => {
  const { toast } = useToast();
  const handleCopy = (event: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(url);
    toast({
      description: <CopyToast />,
      duration: 3000,
    });
    event.stopPropagation();
  };

  const handleShare = (event: React.MouseEvent<HTMLDivElement>) => {
    toast({
      description: <ShareToast />,
      duration: 6000,
    });
    event.stopPropagation();
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
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
          onClick={(e) => e.stopPropagation()}
        >
          <MdEdit size={18} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleShare}
        >
          <IoMdShare size={18} />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleDownload(url, title);
            e.stopPropagation();
          }}
        >
          <IoMdArrowDown size={18} />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleCopy}
        >
          <MdContentCopy size={18} />
          Copy
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
