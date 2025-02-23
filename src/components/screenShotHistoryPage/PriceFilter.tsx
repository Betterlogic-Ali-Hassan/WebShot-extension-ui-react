import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const data = ["SOL", "ETH", "USD"];
const PriceFilter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  return (
    <div className={` ${open ? "pb-1 border-b" : ""} mt-4`}>
      <div
        className='flex items-center justify-between cursor-pointer hover:bg-secondary h-12 rounded-[10px]  mb-2 px-3'
        onClick={() => setOpen(!open)}
      >
        <span className='text-[16px] font-semibold'>Price</span>
        <span>
          {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </span>
      </div>
      {open && (
        <>
          <div className='flex items-center flex-wrap py-3  gap-3'>
            <Select>
              <SelectTrigger className=' w-full py-3 pl-4 pr-3 h-12  font-semibold rounded-[10px] hover:border-border transition duration-300 text-[16px]'>
                <SelectValue placeholder='SOL' />
              </SelectTrigger>
              <SelectContent className='p-2'>
                {data.map((item) => (
                  <SelectItem
                    key={item}
                    value={item}
                    className='font-semibold text-[16px] p-4 rounded-lg'
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2 font-medium mt-3'>
              <div>
                <Input
                  onChange={handleChange1}
                  value={input1}
                  type='number'
                  placeholder='Min'
                  className='min-w-[102px] rounded-[12px] bg-secondary h-12 hover:border-border transition duration-300'
                />
              </div>
              <span className='text-[16px]'>to</span>
              <div>
                <Input
                  onChange={handleChange2}
                  value={input2}
                  type='number'
                  placeholder='Max'
                  className='min-w-[102px] bg-secondary  rounded-[12px] h-12 hover:border-border transition duration-300'
                />
              </div>
            </div>
            <div className='my-6'>
              <Button
                className='font-semibold text-[16px] py-3 px-6 rounded-xl w-full h-12 bg-[#1E81E2] hover:bg-[#1e90e4]'
                disabled={input1 === "" || input2 === ""}
              >
                Apply
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceFilter;
