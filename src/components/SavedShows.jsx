import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import { userAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = userAuth();

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    try {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows);
      });
    } catch (error) {
      console.log(error);
    }
  }, [user?.email]);
  return (
    <>
      <div>
        <h2 className="text-white font-bold md:text-xl p-4 text-center ">
          My Show
        </h2>

        <div className="relative items-center flex group">
          <MdChevronLeft
            onClick={sliderLeft}
            size={40}
            className="absolute left-0 bg-white opacity-50 rounded-full hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
          <div
            id={"slider"}
            className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative "
          >
            {movies?.map((item, id) => (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="flex whitespace-normal justify-center items-center text-center text-white text-sm font-mono font-bold h-full">
                    {item?.title}
                  </p>
                  <p
                    onClick={() => deleteShow(item.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <MdClose size={25} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={sliderRight}
            size={40}
            className="absolute right-0 bg-white opacity-50 rounded-full hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
        </div>
      </div>
    </>
  );
}

export default SavedShows;
