"use client";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard"; // Assuming your ImageCard component is in the same folder
import Imagesidebar from "./Imagesidebar";
import ListView from "./ListView";
interface Props {
  filter: boolean;
  listView: boolean;
}

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1680948516222-e8bdb17212cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
    title: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1713888206130-eb738b08e88f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
    title: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1713888206114-ae557c0882b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHBsYWNlfGVufDB8fDB8fHww",
    title: "Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1621964280096-fc05521c2710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0aWZ1bCUyMHBsYWNlfGVufDB8fDB8fHww",
    title: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1666958827425-bc4898d5eac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMHBsYWNlfGVufDB8fDB8fHww",
    title: "Image 5",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1675975678518-211eaf77366e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMHBsYWNlfGVufDB8fDB8fHww",
    title: "Image 6",
  },
  {
    src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
    title: "Image 7",
  },
  {
    src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",
    title: "Image 8",
  },
  {
    src: "https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww",
    title: "Image 9",
  },
  {
    src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Image 10",
  },
  {
    src: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Image 11",
  },
  {
    src: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Image 12",
  },
  {
    src: "https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Image 13",
  },
  {
    src: "https://images.unsplash.com/photo-1723130031846-79fd300e72d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "Image 14",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1691680760248-b5efa55af05b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Image 15",
  },
  {
    src: "https://images.unsplash.com/photo-1723130028854-1b97ca970bf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    title: "Image 16",
  },
  {
    src: "https://i.pinimg.com/236x/8d/80/ac/8d80ac310f8cc213371c3ea847a46860.jpg",
    title: "Image 17",
  },
  {
    src: "https://www.flaticon.com/media/share/flaticon-generic.jpg",
    title: "Image 18",
  },
  {
    src: "https://i.pinimg.com/474x/cb/63/8f/cb638f1a43e04783bbbaec251a6f416f.jpg",
    title: "Image 19",
  },
  {
    src: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/11/themeisle-icons.png",
    title: "Image 20",
  },
  {
    src: "https://tal7aouy.gallerycdn.vsassets.io/extensions/tal7aouy/icons/3.8.0/1703110281439/Microsoft.VisualStudio.Services.Icons.Default",
    title: "Image 21",
  },
  {
    src: "https://tal7aouy.gallerycdn.vsassets.io/extensions/tal7aouy/icons/3.8.0/1703110281439/Microsoft.VisualStudio.Services.Icons.Default",
    title: "Image 22",
  },
  {
    src: "https://www.flaticon.com/media/share/flaticon-generic.jpg",
    title: "Image 23",
  },
  {
    src: "https://www.flaticon.com/media/share/flaticon-generic.jpg",
    title: "Image 24",
  },
  {
    src: "https://www.flaticon.com/media/share/flaticon-generic.jpg",
    title: "Image 25",
  },
];

const Images = ({ filter, listView }: Props) => {
  const breakpointColumnsObj = {
    default: filter ? 3 : 4, // Default number of columns
    1100: 3, // 2 columns for window width <= 1100px
    700: 2, // 1 column for window width <= 700px
    600: 1, // 1 column for window width <= 700px
  };

  return (
    <div className={`${filter ? "grid  grid-cols-[300px_1fr] " : ""}`}>
      {filter ? (
        <div className=' w-full sticky top-0 h-full max-lg:hidden'>
          <Imagesidebar />
        </div>
      ) : null}

      <div>
        {listView ? (
          <ListView filter={filter} />
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid p-[2em]'
            columnClassName='my-masonry-grid_column'
          >
            {images.map((image, index) => (
              <ImageCard key={index} imgSrc={image.src} title={image.title} />
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
};

export default Images;
