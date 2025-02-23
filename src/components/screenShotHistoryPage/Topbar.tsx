import React from "react";
import Filter from "./Filter";
import LiveData from "./LiveData";
import ImageSearch from "./ImageSearch";
import Selection from "./Selection";
import ImageGrid from "./ImageGrid";
interface Props {
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
  filter: boolean;
}
const Topbar = ({ setFilter, filter, setListView }: Props) => {
  return (
    <div className='mt-6 px-4 flex items-center  '>
      <div className='flex items-center '>
        <Filter setFilter={setFilter} filter={filter} />
      </div>
      <div className='flex items-center mx-4 max-lg:hidden'>
        <LiveData />
        <span className='text-[#545454] ml-6 font-medium w-full whitespace-nowrap'>
          100 results
        </span>
      </div>
      <div className='mx-3 w-full'>
        <ImageSearch />
      </div>

      <Selection />
      <ImageGrid setListView={setListView} />
    </div>
  );
};

export default Topbar;
