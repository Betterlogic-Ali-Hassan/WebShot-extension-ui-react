import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideMoreHorizontal, X } from "lucide-react";
import { LuUpload } from "react-icons/lu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ImageCard = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className='relative overflow-hidden rounded-lg group break-inside-avoid mb-5'>
      <div
        className='relative overflow-hidden cursor-zoom-in '
        onClick={() => setIsDialogOpen(true)}
      >
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-auto max-w-full object-cover rounded-[12px]'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 p-4 rounded-[16px] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
          <div className='flex items-center justify-between w-full absolute top-2 pr-6'>
            <p className='text-white font-semibold'>Creator</p>
            <Button className='bg-[#e60023] text-white rounded-full text-[13px] px-5 flex items-center justify-center font-bold hover:bg-[#ad081b]'>
              Save
            </Button>
          </div>
          <div className='flex absolute bottom-4 justify-between w-full pr-6'>
            <span className='rounded-full py-[6px] px-4 bg-secondary font-semibold cursor-pointer text-sm flex items-center justify-center hover:bg-bg'>
              twitter.com
            </span>
            <div className='flex items-center space-x-2'>
              <Button
                variant='secondary'
                className='rounded-full h-9 w-9 flex items-center justify-center bg-secondary hover:bg-bg border-none shrink-0'
              >
                <span>
                  <LuUpload size={18} />
                </span>
              </Button>
              <Button
                variant='secondary'
                className='rounded-full h-9 w-9 flex items-center justify-center bg-secondary hover:bg-bg border-none shrink-0'
              >
                <span>
                  <LucideMoreHorizontal size={18} />
                </span>
              </Button>
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
