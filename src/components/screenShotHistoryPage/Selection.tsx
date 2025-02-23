import { useState } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data } from "@/constant/imageFilteringData";

const Selection = () => {
  const [selectedSheetOption, setSelectedSheetOption] = useState(data[0].id);
  const handleOptionChange = (id: number) => {
    setSelectedSheetOption(id);
  };

  return (
    <div>
      <div className='max-lg:hidden'>
        <Select>
          <SelectTrigger className='w-[240px] h-12 font-semibold rounded-[10px] hover:border-border transition duration-300 text-[16px]'>
            <SelectValue placeholder='Price low to high' />
          </SelectTrigger>
          <SelectContent className='p-2'>
            {data.map((option, i) => (
              <SelectItem
                key={i}
                value={option.label}
                className='font-semibold text-[16px] p-4 rounded-lg flex justify-between items-center'
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='min-lg:hidden'>
        <Sheet>
          <SheetTrigger className='min-[1024px]:hidden'>
            <div className='p-3 bg-secondary rounded-[12px] min-lg:hidden '>
              <HiMiniArrowsUpDown size={22} />
            </div>
          </SheetTrigger>
          <SheetContent side='bottom'>
            <div>
              <h4 className='font-semibold text-[20px]'>Sort</h4>
              <ul className='mt-4'>
                {data.map((option, i) => (
                  <li
                    key={i}
                    onClick={() => handleOptionChange(option.id)}
                    className='flex justify-between items-center font-semibold text-[16px] p-4 hover:bg-secondary rounded-md'
                  >
                    {option.label}
                    {selectedSheetOption === option.id && <FaCheck size={16} />}
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Selection;
