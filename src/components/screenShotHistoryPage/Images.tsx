"use client";
import Masonry from "react-masonry-css";
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
  const breakpointColumnsObj = {
    default: 5, // Default number of columns
    1100: 3, // 2 columns for window width <= 1100px
    700: 2, // 1 column for window width <= 700px
    600: 1, // 1 column for window width <= 700px
  };
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
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid px-4'
            columnClassName='my-masonry-grid_column'
          >
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
          </Masonry>
        )}
      </div>
    </>
  );
};

export default Images;
