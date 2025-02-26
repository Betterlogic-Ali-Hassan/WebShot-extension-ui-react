import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import { UnsplashImage } from "@/types/ImageType";
import { formatDate } from "@/lib/formatDate";
interface Props {
  imagesData: UnsplashImage[];
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
}
const ListView = ({ imagesData, handleDownload }: Props) => {
  return (
    <div className='px-4 mt-6'>
      <Table className='w-full'>
        <TableHeader>
          <TableRow className='bg-transparent hover:bg-bg'>
            <TableHead className={cn("w-[30%] text-dark ")}>Item</TableHead>
            <TableHead className={cn("text-dark  whitespace-nowrap w-[20%]")}>
              Domain
            </TableHead>
            <TableHead className={cn("w-[20%] text-dark ")}>Date</TableHead>
            <TableHead className={cn(" w-[25%] text-dark ")}>
              Project Tag
            </TableHead>
            <TableHead className={cn("w-[20%] text-dark ")}></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {imagesData.map((image, i) => (
            <TableRow key={i}>
              <TableCell className='flex  items-center '>
                <Checkbox
                  id='img'
                  className='h-6 w-6 rounded-md border-border border mr-[40px]'
                />
                <div className='flex items-center gap-2'>
                  <img
                    src={image.urls.regular}
                    alt={image.title}
                    height={40}
                    width={40}
                    className='rounded-md h-[40px] w-[40px] object-cover'
                  />
                  <span className='font-semibold text-sm truncate whitespace-nowrap w-[150px]'>
                    {image.title}
                  </span>
                </div>
              </TableCell>
              <TableCell className=' whitespace-nowrap'>
                <a
                  href={image.links.html}
                  target='_blank'
                  className='hover:underline text-blue-600 active:text-blue-600 '
                >
                  {new URL(image.links.html).hostname}
                </a>
              </TableCell>
              <TableCell className=' whitespace-nowrap'>
                {formatDate(image.created_at)}
              </TableCell>
              <TableCell className=' whitespace-nowrap'>
                {image.uniqueCategory}
              </TableCell>
              <TableCell className=' whitespace-nowrap'>
                <Menu
                  className='bg-transparent hover:bg-secondary'
                  handleDownload={handleDownload}
                  title={image.title}
                  url={image.urls.regular}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListView;
