import React from 'react'
import SavedShows from '../components/SavedShows'

function Accaunt() {
  return (
    <>
    <div className='w-full text-white h-[410px] '>
    <img
          className="w-full absolute object-cover h-[400px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/684e4658-56af-48ca-8e65-db38a8799238/TZ-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className='w-full bg-black/60 fixed top-0 left-0 '></div>
        <div className='md:p-8 absolute p-4 top-[20%]'>
          <h1 className='text-center text-3xl font-bold md:text-5xl items-center'>My Shows</h1>

        </div>
    </div>
    div
    <SavedShows />
    </>
  )
}

export default Accaunt