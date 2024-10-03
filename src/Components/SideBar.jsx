import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

function SideBar() {
  return (
    <div className='
    h-screen bg-[black] w-[250px]'>
      <div className='
      flex flex-col'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
            className="" alt="" />
        </div>
        <div className='pl-[10px]'>
          <li className='flex gap-2'>
            <FaHome className='
        text-[white]'/>
            <span className='text-[white]'>Home</span>
          </li>
          <li className="flex gap-2">
            <FaSearch className='
        text-[white]'/>
            <span className='text-[white]'>Search</span>
          </li>
          <li className='flex gap-2'>
            <IoLibrary className='
      text-[white]'/>
            <span className='text-[white]'>Your Library</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default SideBar