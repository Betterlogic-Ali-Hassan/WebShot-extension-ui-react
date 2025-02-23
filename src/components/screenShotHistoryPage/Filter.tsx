import React from "react";
import { IoFilter } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import StatusFilter from "./StatusFilter";
import PriceFilter from "./PriceFilter";
import Currency from "./Currency";
import { Button } from "../ui/button";
interface Props {
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  filter: boolean;
}
const Filter = ({ setFilter, filter }: Props) => {
  return (
    <>
      <div
        className='bg-secondary rounded-[10px] p-3 cursor-pointer max-lg:hidden'
        onClick={() => setFilter(!filter)}
      >
        <span>
          <IoFilter size={22} />
        </span>
      </div>
      <div className='min-[1024px]:hidden'>
        <Sheet>
          <SheetTrigger>
            <div
              className='bg-secondary rounded-[10px] p-3 cursor-pointer'
              onClick={() => setFilter(!filter)}
            >
              <span>
                <IoFilter size={22} />
              </span>
            </div>
          </SheetTrigger>
          <SheetContent side='bottom' className=' overflow-y-auto'>
            <div className='flex flex-col justify-between h-full'>
              <div className=' flex flex-col justify-between h-full'>
                <div>
                  <h4 className=' mb-4 text-[20px] font-semibold text-center'>
                    Filters
                  </h4>
                  <div className='mt-8'>
                    <StatusFilter />
                    <PriceFilter />
                    <Currency />
                  </div>
                </div>
                <div className='pt-3  border-t flex items-center gap-2 justify-end'>
                  <Button className='font-semibold text-[16px] py-3 px-6 rounded-xl w-full h-12 bg-[#f2f2f2] hover:bg-[#e5e5e5] text-black'>
                    Clear All
                  </Button>
                  <Button className='font-semibold text-[16px] py-3 px-6 rounded-xl w-full h-12 bg-[#1E81E2] hover:bg-[#1e90e4]'>
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Filter;
