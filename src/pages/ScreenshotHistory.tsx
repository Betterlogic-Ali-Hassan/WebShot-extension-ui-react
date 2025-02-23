"use client";
import Images from "@/components/screenShotHistoryPage/Images";
import ImagesTabs from "@/components/screenShotHistoryPage/ImagesTabs";
import Topbar from "@/components/screenShotHistoryPage/Topbar";
import { useState } from "react";

const ScreenshotHistory = () => {
  const [filter, setFilter] = useState(false);
  const [listView, setListView] = useState(false);
  return (
    <div>
      <ImagesTabs />
      <Topbar setFilter={setFilter} filter={filter} setListView={setListView} />
      <Images filter={filter} listView={listView} />
    </div>
  );
};

export default ScreenshotHistory;
