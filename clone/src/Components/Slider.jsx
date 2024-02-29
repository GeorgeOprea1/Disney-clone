import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <>
      <div>
        <FaChevronLeft
          className="hidden md:block text-white text-[30px] absolute mx-10 mt-[150px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <FaChevronRight
          className="hidden md:block text-white text-[30px] absolute mx-10 mt-[150px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt="slider image"
            key={index}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[6px] border-white transition-all duration-200 ease-in-out"
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
