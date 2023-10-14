import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Rows({ title, fetchURL,rowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [fetchURL]);
  //   console.log(movies);
  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4 text-center ">{title}</h2>

      <div className="relative items-center flex group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="absolute left-0 bg-white opacity-50 rounded-full hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="absolute right-0 bg-white opacity-50 rounded-full hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
}

export default Rows;
