import React from 'react'
import SideBar from "../Components/SideBar"
import NavBar  from "../Components/NavBar" 
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import "../App.css"
function Spotify() {
  return (
    <div className='cont'>
        <div className='flex w-full'>
        <SideBar />
            <div>
            <NavBar />
                <div className='spotify-body'>
                    <Body />
                </div>
            </div>
        </div>
        <div>
             <Footer />
        </div>
    </div>
  )
}

export default Spotify