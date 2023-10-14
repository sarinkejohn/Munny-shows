import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { userAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";



function Movie({ item, id }) {
  const [like, setLike] = useState(false);
  const [saved,setSaved] = useState(false)
  const {user} = userAuth()

  const movieID = doc(db,'users',`${user?.email}`)

  const saveShow= async()=>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID,{
        savedShows: arrayUnion({
          id:item.id,
          title:item.title,
          img:item.backdrop_path,
        })
      })
    }else{
      alert('Please login to save a Movie.')
    }
  }
  return (
    <>
      <div
        key={id}
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="flex whitespace-normal justify-center items-center text-center text-white text-sm font-mono font-bold h-full">
            {item?.title}
          </p>
          <p onClick={saveShow} className="text-white">
            {like ? (
              <FaHeart className="text-red-600 absolute top-4 left-4" />
            ) : (
              <FaRegHeart className="text-gray-400 absolute top-4 left-4" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
