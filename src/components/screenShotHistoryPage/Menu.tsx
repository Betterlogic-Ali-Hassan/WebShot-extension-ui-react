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
import ShareToast from "./ShareLink";
import { handleImageCopy } from "@/lib/ImageCopytoClipBoard";
import DeleteConfirmation from "./DeleteConfirmation";
interface Props {
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
  className?: string;
  title: string;
  url: string;
  handleDeleteData: (id: string) => void;
  id: string;
  deleteBtn?: boolean;
}

const Menu = ({
  className,
  title,
  url,
  handleDownload,
  handleDeleteData,
  id,
  deleteBtn,
}: Props) => {
  const { toast } = useToast();

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
            "rounded-full sm:h-9 sm:w-9 h-8 w-8 flex items-center justify-center bg-secondary hover:bg-bg border-none shrink-0",
            className
          )}
        >
          <span>
            <LucideMoreHorizontal size={20} />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-bg '>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={(e) => e.stopPropagation()}
        >
          <MdEdit size={20} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={handleShare}
        >
          <IoMdShare size={20} />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleDownload(url, title);
            e.stopPropagation();
          }}
        >
          <IoMdArrowDown size={20} />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center gap-2'
          onClick={(e) => handleImageCopy(e, url)}
        >
          <MdContentCopy size={19} />
          Copy
        </DropdownMenuItem>
        {deleteBtn && (
          <DeleteConfirmation
            className='flex items-center gap-2 relative  cursor-pointer select-none w-full rounded-md text-base px-2 py-2 font-semibold outline-none transition-colors hover:bg-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none  [&_svg]:shrink-0'
            id={id}
            handleDeleteData={handleDeleteData}
            allowText
          />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
