"use client";

import ImageCard from "./ImageCard";
import ListView from "./ListView";

interface Props {
  listView: boolean;
  images: {
    src: string;
    title: string;
  }[];
}

const Images = ({ listView, images }: Props) => {
  // const breakpointColumnsObj = {
  //   default: filter ? 3 : 4, // Default number of columns
  //   1100: 3, // 2 columns for window width <= 1100px
  //   700: 2, // 1 column for window width <= 700px
  //   600: 1, // 1 column for window width <= 700px
  // };

  return (
    <>
      <div className='px-6 pt-6'>
        {listView ? (
          <ListView />
        ) : (
          <div className='columns-5  max-[1200px]:columns-3 max-md:columns-2  max-[400px]:columns-1'>
            {images.map((image, index) => (
              <ImageCard key={index} imgSrc={image.src} title={image.title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Images;
