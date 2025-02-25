"use client";
import Images from "@/components/screenShotHistoryPage/Images";
import Topbar from "@/components/screenShotHistoryPage/Topbar";
import { images } from "@/constant/AllImages";
import { data } from "@/constant/imagesData";
import { useState } from "react";

const ScreenshotHistory = () => {
  const [listView, setListView] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [updatedImagesData, setUpdatedImagesData] = useState(images);
  const handleDeleteData = (title: string) => {
    const updatedImages = updatedImagesData.filter(
      (image) => image.title !== title
    );
    setUpdatedImagesData(updatedImages);
  };
  const filteredImages = updatedImagesData.filter((image) =>
    image.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const tableImagesFilter = data.filter((image) =>
    image.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <Topbar
        setListView={setListView}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Images
        tableData={tableImagesFilter}
        listView={listView}
        images={filteredImages}
        handleDeleteData={handleDeleteData}
      />
    </div>
  );
};

export default ScreenshotHistory;
