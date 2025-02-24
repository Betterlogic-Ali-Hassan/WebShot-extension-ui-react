import React from "react";

import ImageSearch from "./ImageSearch";

import ImageGrid from "./ImageGrid";
interface Props {
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}
const Topbar = ({ setListView, setSearchValue, searchValue }: Props) => {
  return (
    <div className='mt-6 px-4 flex items-center max-[400px]:flex-col gap-3 max-[400px]:items-start  '>
      <div className='mx-3 w-full'>
        <ImageSearch
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </div>
      <ImageGrid setListView={setListView} />
    </div>
  );
};

export default Topbar;
