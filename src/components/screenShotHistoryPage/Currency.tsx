import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { MdOutlineSearch } from "react-icons/md";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
const Currency = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className='mt-4'>
      <div
        className='flex items-center justify-between cursor-pointer hover:bg-secondary h-12 rounded-[10px]  mb-2 px-3'
        onClick={() => setOpen(!open)}
      >
        <span className='text-[16px] font-semibold'>Currency</span>
        <span>
          {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </span>
      </div>
      {open && (
        <div className='flex items-center flex-wrap py-3'>
          <div className='flex items-center p-3 border hover:border-border transition duration-300 rounded-xl h-[40px] w-full justify-between'>
            <div className='flex items-center'>
              <MdOutlineSearch size={24} color='#545454' className='mr-2' />
              <Input
                className=' w-full border-none bg-transparent  text-[16px] p-0 placeholder:text-[#535353] '
                placeholder='Search'
                value={input}
                onChange={handleChange}
              />
            </div>
            {input !== "" && (
              <span className='cursor-pointer' onClick={() => setInput("")}>
                <X size={18} color='#555' />
              </span>
            )}
          </div>
          <div className='mt-3 w-full'>
            <div className='flex items-center space-x-2 h-[56px] hover:bg-secondary px-2 rounded-[12px] cursor-pointer '>
              <Checkbox id='eth' className='h-6 w-6 rounded-md' />
              <label
                htmlFor='eth'
                className=' font-medium leading-none ed text-[16px]'
              >
                ETH
              </label>
            </div>
            <div className='flex items-center space-x-2 h-[56px] hover:bg-secondary px-2 rounded-[12px]  cursor-pointer'>
              <Checkbox id='wet' className='h-6 w-6 rounded-md' />
              <label
                htmlFor='wet'
                className=' font-medium leading-none  text-[16px]'
              >
                WETH
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
