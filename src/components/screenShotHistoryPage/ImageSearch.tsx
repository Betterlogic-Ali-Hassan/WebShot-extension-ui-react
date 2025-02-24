import { Input } from "../ui/input";
import { MdOutlineSearch } from "react-icons/md";
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const ImageSearch = ({ searchValue, setSearchValue }: Props) => {
  return (
    <div className='w-full '>
      <div className='flex items-center p-3 border hover:border-[#B2B2B2] transition duration-300 rounded-xl h-12 w-full'>
        <MdOutlineSearch size={24} color='#545454' className='mr-2' />
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className=' w-full border-none bg-transparent h-full text-[16px] p-0 placeholder:text-border '
          placeholder='Search by name '
        />
      </div>
    </div>
  );
};

export default ImageSearch;
