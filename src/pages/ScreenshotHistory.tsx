"use client";
import DownloadToast from "@/components/screenShotHistoryPage/DownloadToast";
import Images from "@/components/screenShotHistoryPage/Images";
import Topbar from "@/components/screenShotHistoryPage/Topbar";
import { images } from "@/constant/AllImages";
import { useToast } from "@/hooks/use-toast";
import FileSaver from "file-saver";
import { useCallback, useState } from "react";

const ScreenshotHistory = () => {
  const [listView, setListView] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [updatedImagesData, setUpdatedImagesData] = useState(images);
  const [shouldDownload, setShouldDownload] = useState(false);
  const { toast } = useToast();
  const handleDeleteData = (title: string) => {
    const updatedImages = updatedImagesData.filter(
      (image) => image.title !== title
    );
    setUpdatedImagesData(updatedImages);
  };
  const filteredImages = updatedImagesData.filter((image) =>
    image.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleDownload = useCallback(
    async (url: string, imageTitle: string) => {
      toast({
        description: (
          <DownloadToast
            fileName={imageTitle}
            setShouldDownload={setShouldDownload}
          />
        ),
        duration: 6000,
      });

      if (!shouldDownload) {
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          FileSaver.saveAs(blob, `image-${Date.now()}.png`);
        } catch (error) {
          console.error("Download failed:", error);

          toast({
            variant: "destructive",
            title: "Download failed",
            description: "There was an error downloading your file.",
          });
        }
      }
    },
    [toast]
  );

  return (
    <div>
      <Topbar
        setListView={setListView}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Images
        handleDownload={handleDownload}
        imagesData={filteredImages}
        listView={listView}
        handleDeleteData={handleDeleteData}
      />
    </div>
  );
};

export default ScreenshotHistory;
