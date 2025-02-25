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
interface Props {
  tableData: {
    id: number;
    imgSrc: string;
    title: string;
    projectTag: string;
    domain: string;
    date: string;
  }[];
}
const ListView = ({ tableData }: Props) => {
  return (
    <div className='px-4 mt-6'>
      <Table className='w-full'>
        <TableHeader>
          <TableRow className='bg-transparent hover:bg-bg'>
            <TableHead
              className={cn("min-[1400px]:w-[400px] w-[200px] text-dark ")}
            >
              Item
            </TableHead>
            <TableHead
              className={cn(
                "text-dark  whitespace-nowrap min-[1400px]:w-[200px] w-[160px]"
              )}
            >
              Domain
            </TableHead>
            <TableHead
              className={cn("w-[160px] min-[1400px]:w-[200px] text-dark ")}
            >
              Date
            </TableHead>
            <TableHead
              className={cn("w-[160px] min-[1400px]:w-[200px] text-dark ")}
            >
              Project Tag
            </TableHead>
            <TableHead
              className={cn("w-[160px] min-[1400px]:w-[200px] text-dark ")}
            ></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className='flex  items-center '>
                <Checkbox
                  id='img'
                  className='h-6 w-6 rounded-md border-border border mr-[40px]'
                />
                <div className='flex items-center gap-2'>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    height={40}
                    width={40}
                    className='rounded-md h-[40px] w-[40px] object-cover'
                  />
                  <span className='font-semibold text-sm truncate whitespace-nowrap w-[150px]'>
                    {item.title}
                  </span>
                </div>
              </TableCell>
              <TableCell className=' whitespace-nowrap'>
                <a
                  href={item.domain}
                  target='_blank'
                  className='hover:underline text-blue-600 active:text-blue-600 '
                >
                  {item.domain}
                </a>
              </TableCell>
              <TableCell className=' whitespace-nowrap'>{item.date}</TableCell>
              <TableCell className=' whitespace-nowrap'>
                {item.projectTag}
              </TableCell>
              <TableCell className=' whitespace-nowrap'>
                <Menu className='bg-transparent hover:bg-secondary' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListView;
