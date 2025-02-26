import React from "react";

import ImageSearch from "./ImageSearch";

import ImageGrid from "./ImageGrid";
interface Props {
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  handleSearchImages: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
  page: number;
}
const Topbar = ({
  setListView,
  setSearchValue,
  searchValue,
  handleSearchImages,
  loading,
  page,
}: Props) => {
  return (
    <div className=' px-4 flex items-center max-[400px]:flex-col gap-3 max-[400px]:items-start bg-bg min-h-[100px] py-3 fixed top-0 w-full z-50  '>
      <div className='mx-3 w-full'>
        <ImageSearch
          loading={loading}
          page={page}
          handleSearchImages={handleSearchImages}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </div>
      <ImageGrid setListView={setListView} />
    </div>
  );
};

export default Topbar;
