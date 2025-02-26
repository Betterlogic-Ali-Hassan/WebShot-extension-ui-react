import { useState } from "react";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Menu from "./Menu";
import DeleteConfirmation from "./DeleteConfirmation";

interface Props {
  imgSrc: string;
  title: string;
  handleDeleteData: (id: string) => void;
  url?: string;
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
  id: string;
  alt_description?: string;
}

const ImageCard = ({
  imgSrc,
  title,
  handleDeleteData,
  handleDownload,
  id,
  alt_description,
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className='relative overflow-hidden rounded-lg group break-inside-avoid mb-3'>
      <div
        className='relative overflow-hidden cursor-zoom-in break-inside-avoid '
        onClick={() => setIsDialogOpen(true)}
      >
        <img
          src={imgSrc}
          alt={title}
          className='w-full max-[1600px]:max-h-[450px] max-h-[650px] h-auto max-w-full  object-cover rounded-[16px]'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 sm:p-4 px-2 rounded-[16px] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
          <div className='flex items-center justify-between w-full absolute top-2 pr-6'>
            <p className='text-white font-semibold text-sm truncate max-w-[200px] capitalize'>
              {alt_description}
            </p>
            {/* <Button className='bg-[#e60023] text-white rounded-full text-[13px] px-5 flex items-center justify-center font-bold hover:bg-[#ad081b]'>
              Save
            </Button> */}
          </div>
          <div className='flex absolute bottom-4 justify-between w-full pr-4 sm:pr-6'>
            <span className='rounded-full sm:py-[6px] sm:px-4 bg-secondary font-semibold cursor-pointer text-sm flex items-center justify-center hover:bg-bg max-sm:text-xs px-2 py-1 '>
              twitter.com
            </span>
            <div className='flex items-center space-x-2'>
              <DeleteConfirmation handleDeleteData={handleDeleteData} id={id} />
              <Menu
                handleDownload={handleDownload}
                title={title}
                url={imgSrc}
              />
            </div>
          </div>
        </div>
      </div>

      {/* AlertDialog for image preview */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger asChild>
          <span />
        </AlertDialogTrigger>
        <AlertDialogContent className='max-w-lg w-full h-auto max-h-[80vh] bg-transparent text-white shadow-none outline-none border-none'>
          <AlertDialogHeader>
            <AlertDialogTitle className='flex items-center justify-between'>
              {title}
              <span
                className='bg-card hover:bg-secondary text-dark h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-300'
                onClick={() => setIsDialogOpen(false)}
              >
                <X size={20} />
              </span>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className='flex justify-center'>
            <img
              src={imgSrc}
              alt={title}
              className='rounded-lg max-w-full min-h-[70vh] object-cover'
            />
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ImageCard;
