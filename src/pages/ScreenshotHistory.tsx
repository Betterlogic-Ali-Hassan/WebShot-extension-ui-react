"use client";
import Images from "@/components/screenShotHistoryPage/Images";
import Topbar from "@/components/screenShotHistoryPage/Topbar";
import { useState } from "react";

const ScreenshotHistory = () => {
  const [listView, setListView] = useState(false);
  return (
    <div>
      <Topbar setListView={setListView} />
      <Images listView={listView} />
    </div>
  );
};

export default ScreenshotHistory;
