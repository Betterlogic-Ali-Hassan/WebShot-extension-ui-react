import React from "react";
import StatusFilter from "./StatusFilter";
import PriceFilter from "./PriceFilter";
import Currency from "./Currency";
const Imagesidebar = () => {
  return (
    <>
      <div className='mt-10 pl-6 '>
        <StatusFilter />
        <PriceFilter />
        <Currency />
      </div>
    </>
  );
};

export default Imagesidebar;
