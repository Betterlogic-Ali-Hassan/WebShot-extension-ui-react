import React from "react";

import ImageSearch from "./ImageSearch";

import ImageGrid from "./ImageGrid";
interface Props {
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
}
const Topbar = ({ setListView }: Props) => {
  return (
    <div className='mt-6 px-4 flex items-center  '>
      <div className='mx-3 w-full'>
        <ImageSearch />
      </div>
      <ImageGrid setListView={setListView} />
    </div>
  );
};

export default Topbar;
