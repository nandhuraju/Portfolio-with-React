import React from 'react'
import Navbar from './Navbar'
import Photo from './Photo'
import Aboutme from './Aboutme'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

const Body = () => {
  return (
    <>
    <div id="grad" className="bg-gradient-to-r from-purple-500 to-pink-500">
   <Navbar/>
   <Photo/>
   <Aboutme/>
   <Experience/>
   <Education/>
   <Contact/>
   </div>
    </>
  )
}

export default Body