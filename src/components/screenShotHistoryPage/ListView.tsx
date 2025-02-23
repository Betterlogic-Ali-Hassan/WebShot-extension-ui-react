import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "../ui/checkbox";
import { data } from "@/constant/imagesData";
import { cn } from "@/lib/utils";

interface Props {
  filter: boolean;
}
const ListView = ({ filter }: Props) => {
  return (
    <div className='px-4 mt-6'>
      <Table className='w-full'>
        <TableHeader>
          <TableRow className='bg-transparent hover:bg-white'>
            <TableHead
              className={`${
                filter
                  ? "min-[1400px]:w-[400px] w-[200px]"
                  : " min-[1400px]:w-[400px]  w-[300px]"
              }  text-[#545454] font-medium `}
            >
              Item
            </TableHead>
            <TableHead
              className={cn(
                "text-[#545454] font-medium whitespace-nowrap min-[1400px]:w-[200px] w-[160px]",
                filter && "min-[1400px]:w-[300px] w-[200px]"
              )}
            >
              Current Price
            </TableHead>
            <TableHead
              className={` ${
                filter
                  ? "w-[160px] min-[1400px]:w-[200px]"
                  : "min-[1400px]:w-[300px] w-[200px]"
              }  text-[#545454] font-medium`}
            >
              Best Offer
            </TableHead>
            <TableHead
              className={` ${
                filter
                  ? "w-[160px] min-[1400px]:w-[200px]"
                  : "min-[1400px]:w-[300px] w-[200px]"
              }  text-[#545454] font-medium`}
            >
              Last Sale
            </TableHead>
            <TableHead
              className={` ${
                filter
                  ? "w-[160px] min-[1400px]:w-[200px]"
                  : "min-[1400px]:w-[300px] w-[200px]"
              }  text-[#545454] font-medium`}
            >
              Owner
            </TableHead>
            <TableHead className='text-[#545454] font-medium whitespace-nowrap'>
              Time Listed
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className='cursor-pointer'>
              <TableCell className='flex  items-center '>
                <Checkbox
                  id='eth'
                  className='h-6 w-6 rounded-md border-[#1212121e] border mr-[40px]'
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
              <TableCell className='font-medium whitespace-nowrap'>
                {item.currentPrice}
              </TableCell>
              <TableCell className='font-medium whitespace-nowrap'>
                {item.bestOffer}
              </TableCell>
              <TableCell className='font-medium whitespace-nowrap'>
                {item.lastSale}
              </TableCell>
              <TableCell className='font-medium text-[#2081E2]'>
                {item.owner}
              </TableCell>
              <TableCell className='font-medium'>{item.timeListed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListView;
