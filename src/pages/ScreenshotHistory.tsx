"use client";
import DownloadToast from "@/components/screenShotHistoryPage/DownloadToast";
import Images from "@/components/screenShotHistoryPage/Images";
import Topbar from "@/components/screenShotHistoryPage/Topbar";
import { useToast } from "@/hooks/use-toast";
import FileSaver from "file-saver";
import { useCallback, useEffect, useRef, useState } from "react";
import { UnsplashImage } from "@/types/ImageType";
import { unsplashApi } from "@/lib/Api";
import { generateUniqueCategory } from "@/lib/generateUiqueCategory";
import { useInView } from "react-intersection-observer";
import { Loader2 } from "lucide-react";
const ScreenshotHistory = () => {
  const [listView, setListView] = useState(false);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const { toast } = useToast();
  const fetchImages = useCallback(
    async (searchQuery: string, pageNumber: number) => {
      try {
        setLoading(true);
        const response = await unsplashApi.get("/search/photos", {
          params: {
            query: searchQuery || "bikes",
            page: pageNumber,
            per_page: "50",
          },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newImages = response.data.results.map((img: any) => ({
          ...img,
          uniqueCategory: generateUniqueCategory(
            img.alt_description,
            searchQuery
          ),
        }));
        if (pageNumber === 1) {
          setImages(newImages);
        } else {
          setImages((prev) => [...prev, ...newImages]);
        }
        setHasMore(newImages.length > 0);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  const searchImages = async (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    await fetchImages(query, 1);
  };

  const loadMore = useCallback(async () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      await fetchImages(query, nextPage);
    }
  }, [loading, hasMore, page, query, fetchImages]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);
  useEffect(() => {
    fetchImages(query, 1);
  }, [fetchImages]);

  const deleteImage = (id: string) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const [shouldDownload, setShouldDownload] = useState(true);
  const shouldDownloadRef = useRef(shouldDownload);

  const handleDownload = useCallback(
    async (url: string, imageTitle: string) => {
      setShouldDownload(true);
      shouldDownloadRef.current = true;

      toast({
        description: (
          <DownloadToast
            fileName={imageTitle}
            setShouldDownload={(value) => {
              setShouldDownload(value);
              shouldDownloadRef.current = value;
            }}
          />
        ),
        duration: 6000,
      });

      await new Promise((resolve) => setTimeout(resolve, 5000));

      if (shouldDownloadRef.current) {
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
        handleSearchImages={searchImages}
        setListView={setListView}
        searchValue={query}
        setSearchValue={setQuery}
        loading={loading}
        page={page}
      />
      <Images
        handleDownload={handleDownload}
        images={images}
        listView={listView}
        handleDeleteData={deleteImage}
      />
      <div ref={ref} className='flex justify-center items-center py-8'>
        {loading && page > 1 && (
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 animate-spin' />
            <p className='text-sm text-muted-foreground'>
              Loading more images...
            </p>
          </div>
        )}
      </div>

      {images.length === 0 && !loading && (
        <div className='text-center text-muted-foreground mt-8'>
          No images found. Try searching for something else!
        </div>
      )}
    </div>
  );
};

export default ScreenshotHistory;
