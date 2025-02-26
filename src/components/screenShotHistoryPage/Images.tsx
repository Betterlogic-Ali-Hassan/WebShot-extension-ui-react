"use client";

import { UnsplashImage } from "@/types/ImageType";
import ImageCard from "./ImageCard";
import ListView from "./ListView";

interface Props {
  listView: boolean;
  handleDeleteData: (id: string) => void;
  images: UnsplashImage[];
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
}

const Images = ({
  listView,
  handleDeleteData,
  images,
  handleDownload,
}: Props) => {
  return (
    <>
      <div className='px-6 pt-[100px]'>
        {listView ? (
          <ListView
            imagesData={images}
            handleDownload={handleDownload}
            handleDelete={handleDeleteData}
          />
        ) : (
          <div className='min-[1600px]:columns-6 columns-5  max-[1200px]:columns-3 max-md:columns-2  max-[400px]:columns-1'>
            {images.map((image, index) => (
              <ImageCard
                alt_description={image.alt_description}
                id={image.id}
                handleDownload={handleDownload}
                key={index}
                imgSrc={image.urls.regular}
                title={image.title}
                url={new URL(image.links.html).hostname}
                handleDeleteData={handleDeleteData}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Images;
