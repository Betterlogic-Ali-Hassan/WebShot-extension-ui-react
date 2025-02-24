"use client";
import Images from "@/components/screenShotHistoryPage/Images";
import Topbar from "@/components/screenShotHistoryPage/Topbar";
import { images } from "@/constant/AllImages";
import { useState } from "react";

const ScreenshotHistory = () => {
  const [listView, setListView] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <Topbar
        setListView={setListView}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Images listView={listView} images={filteredImages} />
    </div>
  );
};

export default ScreenshotHistory;
