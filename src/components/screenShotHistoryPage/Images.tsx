"use client";

import ImageCard from "./ImageCard";
import ListView from "./ListView";

interface Props {
  listView: boolean;
  images: {
    src: string;
    title: string;
  }[];
  handleDeleteData: (title: string) => void;
  tableData: {
    id: number;
    imgSrc: string;
    title: string;
    projectTag: string;
    domain: string;
    date: string;
  }[];
}

const Images = ({ listView, images, handleDeleteData, tableData }: Props) => {
  return (
    <>
      <div className='px-6 pt-6'>
        {listView ? (
          <ListView tableData={tableData} />
        ) : (
          <div className='min-[1600px]:columns-6 columns-5  max-[1200px]:columns-3 max-md:columns-2  max-[400px]:columns-1'>
            {images.map((image, index) => (
              <ImageCard
                key={index}
                imgSrc={image.src}
                title={image.title}
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
