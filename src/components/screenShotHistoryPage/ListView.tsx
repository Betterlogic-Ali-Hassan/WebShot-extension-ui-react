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
import ActionToolbar from "./ActionToolbar";
import { useState } from "react";
interface Props {
  imagesData: UnsplashImage[];
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
  handleDelete: (id: string) => void;
}
const ListView = ({ imagesData, handleDownload, handleDelete }: Props) => {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>([]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedBoxes = [...checkedBoxes];
    newCheckedBoxes[index] = !newCheckedBoxes[index];
    setCheckedBoxes(newCheckedBoxes);
  };
  const checkedCount = checkedBoxes.filter(Boolean).length;
  return (
    <div className='px-4 mt-6 relative'>
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
                  id={`checkbox-${i}`}
                  onCheckedChange={() => handleCheckboxChange(i)}
                  className='h-6 w-6 rounded-md border-border border mr-[40px]'
                />
                <div className='flex items-center gap-2'>
                  <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                    height={40}
                    width={40}
                    className='rounded-md h-[40px] w-[40px] object-cover'
                  />
                  <span className='font-semibold text-sm truncate whitespace-nowrap w-[150px] capitalize'>
                    {image.alt_description}
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
                  id={image.id}
                  handleDeleteData={handleDelete}
                  deleteBtn
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
      <ActionToolbar checkedCount={checkedCount} />
    </div>
  );
};

export default ListView;
