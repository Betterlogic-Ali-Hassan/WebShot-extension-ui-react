import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { MdOutlineSearch } from "react-icons/md";
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  handleSearchImages: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
  page: number;
}

const ImageSearch = ({
  searchValue,
  setSearchValue,
  handleSearchImages,
  loading,
  page,
}: Props) => {
  return (
    <div className='w-full '>
      <form
        onSubmit={handleSearchImages}
        className='flex items-center p-3 border hover:border-[#B2B2B2] transition duration-300 rounded-xl h-12 w-full'
      >
        <button type='submit' disabled={loading} className='mr-2'>
          {loading && page === 1 ? (
            <Loader2 className='h-5 w-5 animate-spin' color='#545454' />
          ) : (
            <MdOutlineSearch size={24} color='#545454' className='mr-2' />
          )}
        </button>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className=' w-full border-none bg-transparent h-full text-[16px] p-0 placeholder:text-border '
          placeholder='Search Images '
        />
      </form>
    </div>
  );
};

export default ImageSearch;
