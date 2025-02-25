"use client";

import ImageCard from "./ImageCard";
import ListView from "./ListView";

interface Props {
  listView: boolean;
  handleDeleteData: (title: string) => void;
  imagesData: {
    src: string;
    title: string;
    projectTag: string;
    domain: string;
    date: string;
  }[];
  handleDownload: (url: string, imageTitle: string) => Promise<void>;
}

const Images = ({
  listView,
  handleDeleteData,
  imagesData,
  handleDownload,
}: Props) => {
  return (
    <>
      <div className='px-6 pt-6'>
        {listView ? (
          <ListView imagesData={imagesData} handleDownload={handleDownload} />
        ) : (
          <div className='min-[1600px]:columns-6 columns-5  max-[1200px]:columns-3 max-md:columns-2  max-[400px]:columns-1'>
            {imagesData.map((image, index) => (
              <ImageCard
                handleDownload={handleDownload}
                key={index}
                imgSrc={image.src}
                title={image.title}
                url={image.domain}
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
